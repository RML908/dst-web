import { Injectable } from '@angular/core';
import {BehaviorSubject, map, Observable, of} from "rxjs";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

import {User} from "../../modules/auth/model/user";
import { environment } from '../../../environments/environment';
import {AuthUtils} from "./auth.utils";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSubject: BehaviorSubject<User | null>;
  public user: Observable<User | null>;
  private _authenticated: boolean = false;

  constructor(

    private router: Router,
    private http: HttpClient
  )
  {
    this.userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
    this.user = this.userSubject.asObservable();
  }
  //setter and getter for access token
  set accessToken(token: string)
  {
    localStorage.setItem('accessToken', token);
  }

  get accessToken(): string
  {
    return localStorage.getItem('accessToken') ?? '';
  }

  signIn(credentials:{username: string, password: string}) {
    return this.http.post<User>(`${environment.apiUrl}/users/authenticate`, credentials)
      .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('user', JSON.stringify(user));
        this.userSubject.next(user);
        return user;
      }));
  }

  signOut(): Observable<any> {
    // Remove the access token from the local storage
    localStorage.removeItem('accessToken');

    // Set the authenticated flag to false
    this._authenticated = false;

    // Return the observable
    return of(true);
  }

  check(): Observable<boolean>
  {
    // Check if the user is logged in
    if ( this._authenticated )
    {
      return of(true);
    }

    // Check the access token availability
    if ( !this.accessToken )
    {
      return of(false);
    }

    // Check the access token expire date
    if ( AuthUtils.isTokenExpired(this.accessToken) )
    {
      return of(false);
    }

    // If the access token exists and it didn't expire, sign in using it
    // return this.signInUsingToken();
    return of(true);
  }
}

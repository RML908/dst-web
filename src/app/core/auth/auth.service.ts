import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of, tap} from "rxjs";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {User} from "../../modules/auth/model/user";
import {environment} from "../../../environments/environment";
import {CookieService} from "ngx-cookie-service";
import _ from 'lodash';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private _userSubject: BehaviorSubject<User | null> = new BehaviorSubject(null);
  public user: Observable<User | null>;
  private _authenticated: boolean = false;
  private loggedIn = new BehaviorSubject<boolean>(false);
  isAuthenticated: any;

  constructor(
    private router: Router,
    private http: HttpClient,
    private cookieService: CookieService
  ) {
    const userJson = localStorage.getItem('user');
    if (userJson) {
      const user = JSON.parse(userJson) as User;
      this._userSubject.next(user);
    }
  }

  get user$(): Observable<User | null> {
    return this._userSubject.asObservable();
  }


  setUser(user: User): void {
    if (!_.isEqual(user, this._userSubject.getValue())) {
      this._userSubject.next(user);
      localStorage.setItem('user', JSON.stringify(user));
    }
  }

  clearUser(): void {
    this._userSubject.next(null);
    localStorage.removeItem('user');
  }

  signIn(username: string, password: string, redirectURL: string): Observable<User> {
    const url = `${environment.apiUrl}/login.php?user_login=${username}&user_password=${password}`;
    return this.http.get(url)
      .pipe(
        tap((data: User) => {
          this.setUser(data);
          const urlTree = this.router.parseUrl(redirectURL);
          this.router.navigateByUrl(urlTree);
        })
      );
  }

  logout() {
    this.clearUser();
    this._userSubject.next(null);
    this.router.navigate(['/sign-in']);
  }

  signOut(): Observable<any> {
    const urlTree = this.router.parseUrl('/sign-in');
    this.router.navigateByUrl(urlTree);
    this.setUser(null);
    //ToDo
    // localStorage.removeItem('accessToken');

    // Set the authenticated flag to false
    this._authenticated = false;

    // Return the observable
    return of(true);
  }


  check(): Observable<boolean> {
    // Check if the user is already authenticated
    if (this.isAuthenticated) {
      return of(true);
    }

    // Check if a session cookie exists
    const sessionCookie = this.cookieService.get('session');
    if (!sessionCookie) {
      return of(false);
    }

    // Check if the session is valid (e.g. not expired)
    if (!AuthService.validateSession(sessionCookie)) {
      return of(false);
    }

    // The user is authenticated
    return of(true);
  }

  private static validateSession(sessionCookie: string): boolean {
    // TODO: implement session validation logic
    console.log(sessionCookie);
    return true;
  }


  //ToDO
  // signInUsingToken(): Observable<any>
  // {
  //   // Sign in using the token
  //   return this.http.post('api/auth/sign-in-with-token', {
  //     accessToken: this.accessToken
  //   }).pipe(
  //     catchError(() =>
  //
  //       // Return false
  //       of(false)
  //     ),
  //     switchMap((response: any) => {
  //
  //       // Replace the access token with the new one if it's available on
  //       // the response object.
  //       //
  //       // This is an added optional step for better security. Once you sign
  //       // in using the token, you should generate a new one on the server
  //       // side and attach it to the response object. Then the following
  //       // piece of code can replace the token with the refreshed one.
  //       if ( response.accessToken )
  //       {
  //         this.accessToken = response.accessToken;
  //       }
  //
  //       // Set the authenticated flag to true
  //       this._authenticated = true;
  //
  //       // Store the user on the user service
  //       this._userService.user = response.user;
  //
  //       // Return true
  //       return of(true);
  //     })
  //   );
  // }
}

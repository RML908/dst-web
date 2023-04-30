import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, map, Observable, tap} from 'rxjs';
import {User} from 'app/core/user/user.types';
import {AuthService} from "../auth/auth.service";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _userSubject: BehaviorSubject<User | null> = new BehaviorSubject(null);


  /**
   * Constructor
   */
  constructor(
    private _httpClient: HttpClient,
    private _authService: AuthService,
    private _http: HttpClient
  ) {
    this._authService.userInLocalStorage().subscribe(user => {
      if(user){
        console.log(user);
        this._userSubject.next(user[0]);
      }
    });

  }

  // -----------------------------------------------------------------------------------------------------
  // @ Accessors
  // -----------------------------------------------------------------------------------------------------

  /**
   * Setter & getter for user
   *
   */

  getUserData(): Observable<User | null> {
    const userJson = localStorage.getItem('user');
    const user = userJson ? JSON.parse(userJson) : null;
    console.log("userService User?",user);
    this._userSubject.next(user);
    return this._userSubject.asObservable();
  }


  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Get the current logged-in user data
   */
  // get user$(): Observable<User> {
  //   return this._userSubject.asObservable();
  // }
  public setUser(user: User | null): void {
    localStorage.setItem('user', JSON.stringify(user));
    this._userSubject.next(user);

  }
  /**
   * Update the user
   *
   * @param user
   */
  update(user: User): Observable<any> {
    return this._httpClient.patch<User>('api/common/user', {user}).pipe(
      map((response) => {
        this._userSubject.next(response);
        console.log(response);
      })
    );
  }
}

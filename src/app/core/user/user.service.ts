import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, map, Observable} from 'rxjs';
import {User} from 'app/core/user/user.types';
import {AuthService} from "../auth/auth.service";

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
    private _authService: AuthService
  ) {
    this._authService.user$.subscribe(user => {
      this._userSubject.next(user);
    });

  }

  // -----------------------------------------------------------------------------------------------------
  // @ Accessors
  // -----------------------------------------------------------------------------------------------------

  /**
   * Setter & getter for user
   *
   * @param value
   */

  getUserData(): Observable<User | null> {
    const userJson = localStorage.getItem('user');
    const user = userJson ? JSON.parse(userJson) : null;
    this._userSubject.next(user);
    return this._userSubject.asObservable();
  }


  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Get the current logged in user data
   */
  get user$(): Observable<User> {
    return this._userSubject.asObservable();
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
      })
    );
  }
}

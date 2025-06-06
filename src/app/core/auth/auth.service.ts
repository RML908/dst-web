import {Injectable} from '@angular/core';
import {BehaviorSubject, catchError, map, Observable, of, take, tap, throwError} from "rxjs";
import {Router, UrlTree} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {User} from "../../modules/auth/model/user";
import {environment} from "../../../environments/environment";
import {CookieService} from "ngx-cookie-service";
import _ from 'lodash';

@Injectable()

export class AuthService {

  private _userSubject = new BehaviorSubject<User | null>(null);
  public user$ = this._userSubject.asObservable();
  public authenticated: boolean = false;
  private authenticatedSubject = new BehaviorSubject<boolean>(this.authenticated);
  public authenticated$ = this.authenticatedSubject.asObservable();
  private sessionID: string;
  private user: User;
  private signInRedirectUrl: string;


  constructor(
    private router: Router,
    private http: HttpClient,
    private cookieService: CookieService
  ) {}

   set userInLocalStorageSet(user: any) {
    localStorage.setItem('user', user);
  }
   userInLocalStorage(): Observable<any> {
    const user = JSON.parse(localStorage.getItem('user'));
    return of(user);
  }
  // get userInLocalStorage(): any {
  //   return  localStorage.getItem('user')?? '';
  // }

  private removeUserFromLocalStorage(): void {
    localStorage.removeItem('user');
  }

  setSignInRedirect(url: string) {
    this.signInRedirectUrl = url;
  }

  getSignInRedirect() {
    return this.signInRedirectUrl || '/';
  }

  signInRedirect(url: string): UrlTree {
    return this.router.createUrlTree(['/sign-in'], { queryParams: { returnUrl: url } });
  }
   public get userValue(){
    return this._userSubject.value
   }
 public isAuthenticated (): boolean {
    return localStorage.getItem('user') !== null;
 }

  signIn(credentials:{user_login: string, user_password: string}): Observable<any> {
    const url = `${environment.apiUrl}/login.php?user_login=${credentials.user_login}&user_password=${credentials.user_password}`;
    return this.http.get<any>(url, { withCredentials: false }).pipe(
      tap((data:User[]) => {
        console.log(data);
       const userData = data
        // const setedUser = localStorage.setItem('user', data)
        const setedUser = localStorage.setItem("user", JSON.stringify(userData));
        console.log("setedUser==",setedUser);
        this._userSubject.next(userData[0])
        this.authenticated = true;
      }),
      catchError(error => {
        // Handle login error
        this.authenticated = true;
        return throwError(error);
      })
    );
  }



   check(): Observable<boolean>{

    if(this.authenticated){
      return of(true);
    }
    //Check user availability

    return of(false)
   }


  // public isAuthenticated(): Observable<boolean> {
  //   return this.authenticated$;
  // }
  // signIn(username: string, password: string, redirectURL: string): Observable<any> {
  //   const url = `${environment.apiUrl}/login.php?user_login=${username}&user_password=${password}`;
  //   return this.http.get<any>(url, { withCredentials: false }).pipe(
  //     tap(data => {
  //       this.setUserInLocalStorage(data);
  //       if(data) {
  //         this.getUserFromLocalStorage()
  //         this.authenticated = false;
  //       }
  //       const urlTree = this.router.parseUrl(redirectURL);
  //       this.router.navigateByUrl(urlTree);
  //     })
  //   );
  // }

  logout() {
    this.removeUserFromLocalStorage();
    this._userSubject.next(null);
    this.router.navigate(['/sign-in']);
  }

  signOut(): Observable<any> {

    this.removeUserFromLocalStorage();
        this.authenticated = false;
        this.user = null;
        this.sessionID = null;

        return of(true)

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

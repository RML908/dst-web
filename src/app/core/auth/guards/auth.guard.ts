import {Injectable} from '@angular/core';
import {
  Route,
  UrlSegment,
  Router,
  UrlTree,
  CanMatch, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,
} from '@angular/router';
import {Observable, of, switchMap} from 'rxjs';
import {AuthService} from "../auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanMatch  {

  constructor(
              private _authService: AuthService,
              private _router: Router
  ) {}
  canMatch(_route: Route, segments: UrlSegment[]): Observable <boolean | UrlTree>  | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this._check(segments)
  }

  /**
   *@private
   * @param segments
   */


  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot
  // ): Observable<boolean | UrlTree> {
  //   return this._authService.check().pipe(
  //     switchMap((authenticated) => {
  //       if (!authenticated) {
  //         const redirectUrl = state.url;
  //         console.log('AuthGuard - Redirect:', redirectUrl);
  //         const urlTree = this._router.parseUrl(`/sign-in?redirectURL=${redirectUrl}`);
  //         console.log('AuthGuard - UrlTree:', urlTree);
  //         return of(urlTree);
  //       }
  //       // Allow access
  //       return of(true);
  //     })
  //   );
  // }
  private _check(segments: UrlSegment[]): Observable <boolean | UrlTree >{
    return this._authService.check().pipe(switchMap( (authenticated) =>{
      if(!authenticated ){
        const redirectURl = `/${segments .join('/')}`;
        const urlTree = this._router.parseUrl(`sign-in?redirectURL=${redirectURl}`);

        return of(urlTree);
      }

      //Allow access
      return of(true);
    })
    );
  }

}

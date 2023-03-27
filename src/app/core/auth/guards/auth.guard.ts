import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {map, Observable} from 'rxjs';
import {AuthService} from "../auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  constructor(
    private _router: Router,
    private _authService: AuthService
  ) {
  }


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this._authService.user$.pipe(
      map(user => {
        if (user) {
          return true;
        } else {
          const segments = state.url.split('/').filter(segment => segment);
          const redirectURL = `/${segments.join('/')}`;
          return this._router.parseUrl(`sign-in?redirectURL=${redirectURL}`);
        }
      })
    );
  }


  /**
   * Can match
   *
   * @param route
   * @param segments
   */


  /**
   * Check the authenticated status
   *
   * @param segments
   * @private
   */


}

import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subject, takeUntil} from 'rxjs';
import {Navigation} from 'app/core/navigation/navigation.types';
import {NavigationService} from 'app/core/navigation/navigation.service';
import {User} from 'app/core/user/user.types';
import {UserService} from 'app/core/user/user.service';
import {DstMediaWatcherService} from "../../../../../@dst/services/media-watcher";
import {DstNavigationService, DstVerticalNavigationComponent} from "../../../../../@dst/compnents/navigation";
import {AuthService} from "../../../../core/auth/auth.service";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'classy-layout',
  templateUrl: './classy.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ClassyLayoutComponent implements OnInit, OnDestroy {
  isScreenSmall: boolean;
  navigation: Navigation;
  user: User;
  public user$: any;
  private _unsubscribeAll: Subject<any> = new Subject<any>();

  /**
   * Constructor
   */
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _navigationService: NavigationService,
    private _userService: UserService,
    private _authService: AuthService,
    private _sanitizer: DomSanitizer,
    private _dstMediaWatcherService: DstMediaWatcherService,
    private _dstNavigationService: DstNavigationService
  ) {
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Accessors
  // -----------------------------------------------------------------------------------------------------

  /**
   * Getter for current year
   */
  get currentYear(): number {
    return new Date().getFullYear();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /*
   * On init
   */
  ngOnInit(): void {
    // Subscribe to navigation data
    this._navigationService.navigation$
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((navigation: Navigation) => {
        this.navigation = navigation;
      });

    // Subscribe to the user service
    this._userService.getUserData()
      .pipe(
        takeUntil(this._unsubscribeAll)
      )
      .subscribe((user: User) => {
        if (user) {
          const imageUrl = `data:image/jpeg;base64,${user[0].image}`;
          const safeImageUrl = this._sanitizer.bypassSecurityTrustUrl(imageUrl);
          this.user = {...user[0], safeImageUrl};
        }
      });

    // Subscribe to media changes
    this._dstMediaWatcherService.onMediaChange$
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(({matchingAliases}) => {

        // Check if the screen is small
        this.isScreenSmall = !matchingAliases.includes('md');
      });
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Toggle navigation
   *
   * @param name
   */
  toggleNavigation(name: string): void {
    // Get the navigation
    const navigation = this._dstNavigationService.getComponent<DstVerticalNavigationComponent>(name);

    if (navigation) {
      // Toggle the opened status
      console.log(navigation);
      navigation.toggle();
    }
  }
}

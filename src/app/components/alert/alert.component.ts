import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  HostBinding,
  Input,
  Output,
  SimpleChanges
} from '@angular/core';
import {DstAlertAppearance, DstAlertType} from "./alert.types";
import {filter, Subject, takeUntil} from "rxjs";
import {DstAlertService} from "./alert.service";
import {BooleanInput, coerceBooleanProperty} from "@angular/cdk/coercion";

@Component({
  selector: 'dst-alert',
  templateUrl: './alert.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./alert.component.scss'],
  exportAs :'dstAlert'
})
export class DstAlertComponent {
  /* eslint-disable @typescript-eslint/naming-convention */
  static ngAcceptInputType_dismissible: BooleanInput;
  static ngAcceptInputType_dismissed: BooleanInput;
  static ngAcceptInputType_showIcon: BooleanInput;
  /* eslint-enable @typescript-eslint/naming-convention */

  @Input() appearance: DstAlertAppearance = 'soft';
  @Input() dismissed: boolean = false;
  @Input() dismissible: boolean = false;
  @Input() showIcon: boolean = true;
  @Input() type: DstAlertType = 'primary';
  @Output() readonly dismissedChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

  private _unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(
    private _changeDetectorRef:ChangeDetectorRef,
    private _dstAlertService: DstAlertService
  )
  {
  }

  //Accessors
  // Host binding for component classes

  @HostBinding('class') get classList(): any
  {
    /* eslint-disable @typescript-eslint/naming-convention */
    return {
      'dst-alert-appearance-border' : this.appearance === 'border',
      'dst-alert-appearance-fill'   : this.appearance === 'fill',
      'dst-alert-appearance-outline': this.appearance === 'outline',
      'dst-alert-appearance-soft'   : this.appearance === 'soft',
      'dst-alert-dismissed'         : this.dismissed,
      'dst-alert-dismissible'       : this.dismissible,
      'dst-alert-show-icon'         : this.showIcon,
      'dst-alert-type-primary'      : this.type === 'primary',
      'dst-alert-type-accent'       : this.type === 'accent',
      'dst-alert-type-warn'         : this.type === 'warn',
      'dst-alert-type-basic'        : this.type === 'basic',
      'dst-alert-type-info'         : this.type === 'info',
      'dst-alert-type-success'      : this.type === 'success',
      'dst-alert-type-warning'      : this.type === 'warning',
      'dst-alert-type-error'        : this.type === 'error'
    };
    /* eslint-enable @typescript-eslint/naming-convention */
  }

//  on changes
  ngOnChanges(changes: SimpleChanges): void
  {
    // Dismissed
    if ( 'dismissed' in changes )
    {
      // Coerce the value to a boolean
      this.dismissed = coerceBooleanProperty(changes.dismissed.currentValue);

      // Dismiss/show the alert
      this._toggleDismiss(this.dismissed);
    }

    // Dismissible
    if ( 'dismissible' in changes )
    {
      // Coerce the value to a boolean
      this.dismissible = coerceBooleanProperty(changes.dismissible.currentValue);
    }

    // Show icon
    if ( 'showIcon' in changes )
    {
      // Coerce the value to a boolean
      this.showIcon = coerceBooleanProperty(changes.showIcon.currentValue);
    }
  }

  ngOnInit(): void
  {
    // Subscribe to the dismiss calls
    // this._dstAlertService.onDismiss
    //   .pipe(
    //     filter(name => this.name === name),
    //     takeUntil(this._unsubscribeAll)
    //   )
    //   .subscribe(() => {
    //
    //     // Dismiss the alert
    //     this.dismiss();
    //   });
    //
    // // Subscribe to the show calls
    // this._dstAlertService.onShow
    //   .pipe(
    //     filter(name => this.name === name),
    //     takeUntil(this._unsubscribeAll)
    //   )
    //   .subscribe(() => {
    //
    //     // Show the alert
    //     this.show();
    //   });
  }

  ngOnDestroy(): void
  {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }
  //Dismiss the alert

  dismiss(): void
  {
    // Return if the alert is already dismissed
    if ( this.dismissed )
    {
      return;
    }

    // Dismiss the alert
    this._toggleDismiss(true);
  }


  //  Show the dismissed alert

  show(): void
  {
    // Return if the alert is already showing
    if ( !this.dismissed )
    {
      return;
    }

    // Show the alert
    this._toggleDismiss(false);
  }

//  Dismiss/show the alert

  private _toggleDismiss(dismissed: boolean): void
  {
    // Return if the alert is not dismissible
    if ( !this.dismissible )
    {
      return;
    }

    // Set the dismissed
    this.dismissed = dismissed;

    // Execute the observable
    this.dismissedChanged.next(this.dismissed);

    // Notify the change detector
    this._changeDetectorRef.markForCheck();
  }
}

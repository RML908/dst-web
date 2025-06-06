import { Injectable } from '@angular/core';
import {Observable, ReplaySubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DstAlertService {
  private readonly _onDismiss: ReplaySubject<string> = new ReplaySubject<string>(1);
  private readonly _onShow: ReplaySubject<string> = new ReplaySubject<string>(1);

  constructor() { }

//  Getter for onDismiss
  get onDismiss(): Observable<any>
  {
    return this._onDismiss.asObservable();
  }

  //  Getter for onDismiss
  get onShow(): Observable<any>
  {
    return this._onShow.asObservable();
  }

//  Dismiss the alert, param name

  dismiss(name: string): void
  {
    // Return if the name is not provided
    if ( !name )
    {
      return;
    }

    // Execute the observable
    this._onDismiss.next(name);
  }

//  Show the dismissed alert param name

  show(name: string): void
  {
    // Return if the name is not provided
    if ( !name )
    {
      return;
    }

    // Execute the observable
    this._onShow.next(name);
  }

}

import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import {DstNavigationItem} from "../../../navigation.types";
import {DstVerticalNavigationComponent} from "../../vertical.component";
import {DstNavigationService} from "../../../navigation.service";

@Component({
    selector       : 'dst-vertical-navigation-divider-item',
    templateUrl    : './divider.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DstVerticalNavigationDividerItemComponent implements OnInit, OnDestroy
{
    @Input() item: DstNavigationItem;
    @Input() name: string;

    private _dstVerticalNavigationComponent: DstVerticalNavigationComponent;
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _dstNavigationService: DstNavigationService
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Get the parent navigation component
        this._dstVerticalNavigationComponent = this._dstNavigationService.getComponent(this.name);

        // Subscribe to onRefreshed on the navigation component
        this._dstVerticalNavigationComponent.onRefreshed.pipe(
            takeUntil(this._unsubscribeAll)
        ).subscribe(() => {

            // Mark for check
            this._changeDetectorRef.markForCheck();
        });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }
}

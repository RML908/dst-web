import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import {DstNavigationService} from "../../../navigation.service";
import {DstHorizontalNavigationComponent} from "../../horizontal.component";
import {DstNavigationItem} from "../../../navigation.types";

@Component({
    selector       : 'dst-horizontal-navigation-divider-item',
    templateUrl    : './divider.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DstHorizontalNavigationDividerItemComponent implements OnInit, OnDestroy
{
    @Input() item: DstNavigationItem;
    @Input() name: string;

    private _dstHorizontalNavigationComponent: DstHorizontalNavigationComponent;
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
        this._dstHorizontalNavigationComponent = this._dstNavigationService.getComponent(this.name);

        // Subscribe to onRefreshed on the navigation component
        this._dstHorizontalNavigationComponent.onRefreshed.pipe(
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

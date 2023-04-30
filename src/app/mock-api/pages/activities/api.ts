import { Injectable } from '@angular/core';
import { cloneDeep } from 'lodash-es';
import { activities as activitiesData } from 'app/mock-api/pages/activities/data';
import {DstMockApiService} from "../../../../@dst/lib/mock-api";

@Injectable({
    providedIn: 'root'
})
export class ActivitiesMockApi
{
    private _activities: any = activitiesData;

    /**
     * Constructor
     */
    constructor(private _dstMockApiService: DstMockApiService)
    {
        // Register Mock API handlers
        this.registerHandlers();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Register Mock API handlers
     */
    registerHandlers(): void
    {
        // -----------------------------------------------------------------------------------------------------
        // @ Activities - GET
        // -----------------------------------------------------------------------------------------------------
        this._dstMockApiService
            .onGet('api/pages/activities')
            .reply(() => [200, cloneDeep(this._activities)]);
    }
}

import { Injectable } from '@angular/core';
import { cloneDeep } from 'lodash-es';
import { DstMockApiService } from '@dst/lib/mock-api';
import { analytics as analyticsData } from 'app/mock-api/dashboards/analytics/data';

@Injectable({
    providedIn: 'root'
})
export class AnalyticsMockApi
{
    private _analytics: any = analyticsData;

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
        // @ Sales - GET
        // -----------------------------------------------------------------------------------------------------
        this._dstMockApiService
            .onGet('api/dashboards/analytics')
            .reply(() => [200, cloneDeep(this._analytics)]);
    }
}

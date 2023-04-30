import { Injectable } from '@angular/core';
import { cloneDeep } from 'lodash-es';
import { DstMockApiService } from '@dst/lib/mock-api';
import { project as projectData } from 'app/mock-api/dashboards/project/data';

@Injectable({
    providedIn: 'root'
})
export class ProjectMockApi
{
    private _project: any = projectData;

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
            .onGet('api/dashboards/project')
            .reply(() => [200, cloneDeep(this._project)]);
    }
}

import { Injectable } from '@angular/core';
import { assign, cloneDeep } from 'lodash-es';
import { DstMockApiService } from '@dst/lib/mock-api';
import { user as userData } from 'app/mock-api/common/user/data';
import {environment} from "../../../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class UserMockApi
{
    private _user: any = userData;

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
        // @ User - GET
        // -----------------------------------------------------------------------------------------------------
        this._dstMockApiService
            .onGet(`${environment.apiUrl}/login.php?user_login=DOC3&user_password=DOC3`)
            .reply(() => [200, cloneDeep(this._user)]);

        // -----------------------------------------------------------------------------------------------------
        // @ User - PATCH
        // -----------------------------------------------------------------------------------------------------
        this._dstMockApiService
            .onPatch(`${environment.apiUrl}/login.php?user_login=DOC3&user_password=DOC3`)
            .reply(({request}) => {

                // Get the user mock-api
                const user = cloneDeep(request.body.user);

                // Update the user mock-api
                this._user = assign({}, this._user, user);

                // Return the response
                return [200, cloneDeep(this._user)];
            });
    }
}

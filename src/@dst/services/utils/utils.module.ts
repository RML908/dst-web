import { NgModule } from '@angular/core';
import { DstUtilsService } from '@dst/services/utils/utils.service';

@NgModule({
    providers: [
        DstUtilsService
    ]
})
export class DstUtilsModule
{
    /**
     * Constructor
     */
    constructor(private _DstUtilsService: DstUtilsService)
    {
    }
}

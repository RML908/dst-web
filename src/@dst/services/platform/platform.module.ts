import { NgModule } from '@angular/core';
import {DstPlatformService} from "./platform.service";

@NgModule({
    providers: [
        DstPlatformService
    ]
})
export class DstPlatformModule
{
    /**
     * Constructor
     */
    constructor(private _dstPlatformService: DstPlatformService)
    {
    }
}

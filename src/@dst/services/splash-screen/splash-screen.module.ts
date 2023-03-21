import { NgModule } from '@angular/core';
import {DstSplashScreenService} from "./splash-screen.service";

@NgModule({
    providers: [
        DstSplashScreenService
    ]
})
export class DstSplashScreenModule
{
    /**
     * Constructor
     */
    constructor(private _dstSplashScreenService: DstSplashScreenService)
    {
    }
}

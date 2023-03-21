import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {DstLoadingBarComponent} from "./loading-bar.component";

@NgModule({
    declarations: [
       DstLoadingBarComponent
    ],
    imports     : [
        CommonModule,
        MatProgressBarModule
    ],
    exports     : [
        DstLoadingBarComponent
    ]
})
export class DstLoadingBarModule
{
}

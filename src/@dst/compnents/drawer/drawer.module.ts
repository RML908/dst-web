import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DstDrawerComponent} from "./drawer.component";

@NgModule({
    declarations: [
        DstDrawerComponent
    ],
    imports     : [
        CommonModule
    ],
    exports     : [
        DstDrawerComponent
    ]
})
export class DstDrawerModule
{
}

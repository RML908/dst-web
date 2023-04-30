import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DstCardComponent} from "./card.component";

@NgModule({
    declarations: [
        DstCardComponent
    ],
    imports     : [
        CommonModule
    ],
    exports     : [
        DstCardComponent
    ]
})
export class DstCardModule
{
}

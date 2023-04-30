import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CommonModule } from '@angular/common';
import {DstFullscreenComponent} from "./fullscreen.component";

@NgModule({
    declarations: [
       DstFullscreenComponent
    ],
    imports     : [
        MatButtonModule,
        MatIconModule,
        MatTooltipModule,
        CommonModule
    ],
    exports     : [
        DstFullscreenComponent
    ]
})
export class DstFullscreenModule
{
}

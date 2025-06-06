import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SettingsComponent } from 'app/layout/common/settings/settings.component';
import { MatButtonModule } from '@angular/material/button';
import {DstDrawerModule} from "../../../../@dst/compnents/drawer";

@NgModule({
    declarations: [
        SettingsComponent
    ],
    imports     : [
        CommonModule,
        RouterModule,
        MatIconModule,
        MatTooltipModule,
        DstDrawerModule,
        MatButtonModule
    ],
    exports     : [
        SettingsComponent
    ]
})
export class SettingsModule
{
}

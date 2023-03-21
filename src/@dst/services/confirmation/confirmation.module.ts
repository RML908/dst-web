import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import {DstConfirmationService} from '@dst/services/confirmation/confirmation.service';
import { CommonModule } from '@angular/common';
import {DstConfirmationDialogComponent} from "./dialog/dialog.component";

@NgModule({
    declarations: [
       DstConfirmationDialogComponent
    ],
    imports     : [
        MatButtonModule,
        MatDialogModule,
        MatIconModule,
        CommonModule
    ],
    providers   : [
        DstConfirmationService
    ]
})
export class DstConfirmationModule
{
    /**
     * Constructor
     */
    constructor(private _dstConfirmationService: DstConfirmationService)
    {
    }
}

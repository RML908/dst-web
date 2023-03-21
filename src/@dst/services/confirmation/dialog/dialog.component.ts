import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {DstConfirmationConfig} from "../confirmation.types";

@Component({
    selector     : 'dst-confirmation-dialog',
    templateUrl  : './dialog.component.html',
    styles       : [
        `
            .dst-confirmation-dialog-panel {

                @screen md {
                    @apply w-128;
                }

                .mat-mdc-dialog-container {

                    .mat-mdc-dialog-surface {
                        padding: 0 !important;
                    }
                }
            }
        `
    ],
    encapsulation: ViewEncapsulation.None
})
export class DstConfirmationDialogComponent
{
    /**
     * Constructor
     */
    constructor(@Inject(MAT_DIALOG_DATA) public data: DstConfirmationConfig)
    {
    }

}

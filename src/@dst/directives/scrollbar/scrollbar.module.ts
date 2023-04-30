import { NgModule } from '@angular/core';
import { DstScrollbarDirective } from '@dst/directives/scrollbar/scrollbar.directive';

@NgModule({
    declarations: [
        DstScrollbarDirective
    ],
    exports     : [
        DstScrollbarDirective
    ]
})
export class DstScrollbarModule
{
}

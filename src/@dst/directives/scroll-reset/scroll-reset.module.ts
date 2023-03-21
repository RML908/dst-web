import { NgModule } from '@angular/core';
import { DstScrollResetDirective } from '@dst/directives/scroll-reset/scroll-reset.directive';

@NgModule({
    declarations: [
        DstScrollResetDirective
    ],
    exports     : [
       DstScrollResetDirective
    ]
})
export class DstScrollResetModule
{
}

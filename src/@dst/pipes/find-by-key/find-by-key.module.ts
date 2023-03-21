import { NgModule } from '@angular/core';
import {DstFindByKeyPipe} from '@dst/pipes/find-by-key/find-by-key.pipe';

@NgModule({
    declarations: [
        DstFindByKeyPipe
    ],
    exports     : [
        DstFindByKeyPipe
    ]
})
export class DstFindByKeyPipeModule
{
}

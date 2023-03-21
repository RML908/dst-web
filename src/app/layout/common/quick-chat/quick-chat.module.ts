import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from 'app/shared/shared.module';
import { QuickChatComponent } from 'app/layout/common/quick-chat/quick-chat.component';
import {DstDrawerModule} from "../../../../@dst/compnents/drawer";
import {DstScrollbarModule} from "../../../../@dst/directives/scrollbar";

@NgModule({
    declarations: [
        QuickChatComponent
    ],
    imports     : [
        RouterModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        DstDrawerModule,
        DstScrollbarModule,
        SharedModule
    ],
    exports     : [
        QuickChatComponent
    ]
})
export class QuickChatModule
{
}

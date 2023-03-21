import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { UserModule } from 'app/layout/common/user/user.module';
import { SharedModule } from 'app/shared/shared.module';
import { FuturisticLayoutComponent } from 'app/layout/layouts/vertical/futuristic/futuristic.component';
import {DstLoadingBarModule} from "../../../../../@dst/compnents/loading-bar";
import {DstNavigationModule} from "../../../../../@dst/compnents/navigation";
import {DstFullscreenModule} from "../../../../../@dst/compnents/fullscreen/fullscreen.module";
import {MessagesModule} from "../../../common/messages/messages.module";
import {NotificationsModule} from "../../../common/notifications/notifications.module";
import {QuickChatModule} from "../../../common/quick-chat/quick-chat.module";
import {ShortcutsModule} from "../../../common/shortcuts/shortcuts.module";
import {SearchModule} from "../../../common/search/search.module";

@NgModule({
    declarations: [
        FuturisticLayoutComponent
    ],
    imports     : [
        HttpClientModule,
        RouterModule,
        MatButtonModule,
        MatDividerModule,
        MatIconModule,
        MatMenuModule,
        DstFullscreenModule,
        DstLoadingBarModule,
        DstNavigationModule,
        MessagesModule,
        NotificationsModule,
        QuickChatModule,
        SearchModule,
        ShortcutsModule,
        UserModule,
        SharedModule
    ],
    exports:[
        FuturisticLayoutComponent
    ]
})
export class FuturisticLayoutModule
{
}

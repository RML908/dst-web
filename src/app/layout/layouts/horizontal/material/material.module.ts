import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { LanguagesModule } from 'app/layout/common/languages/languages.module';
import { MessagesModule } from 'app/layout/common/messages/messages.module';
import { NotificationsModule } from 'app/layout/common/notifications/notifications.module';
import { SearchModule } from 'app/layout/common/search/search.module';
import { ShortcutsModule } from 'app/layout/common/shortcuts/shortcuts.module';
import { UserModule } from 'app/layout/common/user/user.module';
import { SharedModule } from 'app/shared/shared.module';
import { MaterialLayoutComponent } from 'app/layout/layouts/horizontal/material/material.component';
import {DstNavigationModule} from "../../../../../@dst/compnents/navigation";
import {DstFullscreenModule} from "../../../../../@dst/compnents/fullscreen/fullscreen.module";
import {DstLoadingBarModule} from "../../../../../@dst/compnents/loading-bar";

@NgModule({
    declarations: [
        MaterialLayoutComponent
    ],
  imports: [
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
    SearchModule,
    ShortcutsModule,
    UserModule,
    SharedModule,

  ],
    exports:[
        MaterialLayoutComponent
    ]
})
export class MaterialLayoutModule
{
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {appRoutes} from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ExtraOptions, PreloadAllModules, RouterModule} from "@angular/router";
import {AuthGuard} from "./core/auth/guards/auth.guard";
import {DstModule} from "../@dst";
import {DstConfigModule} from "../@dst/services/config";
import {appConfig} from "./core/config/app.config";
import {CoreModule} from "./core/core.module";
import {LayoutModule} from "./layout/layout.module";

const routerConfig: ExtraOptions = {
  preloadingStrategy       : PreloadAllModules,
  scrollPositionRestoration: 'enabled'
};
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes, routerConfig),
    DstConfigModule.forRoot(appConfig),
    DstModule,
    CoreModule,
    LayoutModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }

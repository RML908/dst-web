import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {appRoutes} from './app.routing';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ExtraOptions, PreloadAllModules, RouterModule} from "@angular/router";
import {DstModule} from "../@dst";
import {DstConfigModule} from "../@dst/services/config";
import {appConfig} from "./core/config/app.config";
import {CoreModule} from "./core/core.module";
import {LayoutModule} from "./layout/layout.module";
import {mockApiServices} from "./mock-api";
import {DstMockApiModule} from "../@dst/lib/mock-api";

const routerConfig: ExtraOptions = {
  preloadingStrategy       : PreloadAllModules,
  scrollPositionRestoration: 'enabled',
};

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes, routerConfig),
    DstModule,
    DstConfigModule.forRoot(appConfig),
    DstMockApiModule.forRoot(mockApiServices),
    CoreModule,
    LayoutModule,

  ],

  bootstrap: [AppComponent]
})
export class AppModule { }

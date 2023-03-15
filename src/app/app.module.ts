import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthSignInComponent } from './modules/auth/sign-in/sign-in.component';
import { DstAlertComponent } from './components/alert/alert.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatIconModule} from "@angular/material/icon";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatButtonModule} from "@angular/material/button";
import {RouterModule} from "@angular/router";
import {AuthGuard} from "./core/auth/guards/auth.guard";
import {AuthService} from "./core/auth/auth.service";
import {AuthSignInModule} from "./modules/auth/sign-in/sign-in.module";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    AuthSignInModule,
    HttpClientModule

  ],
  providers: [
    AuthGuard,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

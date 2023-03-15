import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {authSignInRoutes} from './sign-in-routing.module';
import {RouterModule} from "@angular/router";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatButtonModule} from "@angular/material/button";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatInputModule} from "@angular/material/input";
import {AuthSignInComponent} from "./sign-in.component";
import {ReactiveFormsModule} from "@angular/forms";
import {DstAlertModule} from "../../../components/alert";


@NgModule({
  declarations: [
    AuthSignInComponent
  ],
  imports: [
    RouterModule.forChild(authSignInRoutes),
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    DstAlertModule
  ]
})
export class AuthSignInModule { }

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
import {DstAlertModule} from "../../../../@dst/compnents/alert";
import {SharedModule} from "../../../shared/shared.module";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AuthSignInComponent
  ],
  exports:[
    AuthSignInComponent
  ],
    imports: [
        RouterModule.forChild(authSignInRoutes),
        HttpClientModule,
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatProgressSpinnerModule,
        DstAlertModule,
        SharedModule,
    ]
})
export class AuthSignInModule { }

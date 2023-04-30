import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthService} from "./auth.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [],
  imports: [
    HttpClientModule
  ],
  providers:[
    AuthService,

  ]
})
export class AuthModule { }

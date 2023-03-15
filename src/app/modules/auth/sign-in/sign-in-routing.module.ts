import { NgModule } from '@angular/core';
import {Route, RouterModule, Routes} from '@angular/router';
import {AuthSignInComponent} from "./sign-in.component";

export const authSignInRoutes: Route [] = [
  {
    path     : '',
    component:AuthSignInComponent
  }
];



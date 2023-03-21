import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthSignInComponent} from "./modules/auth/sign-in/sign-in.component";
import {NoAuthGuard} from "./core/auth/guards/noAuth.guard";
import {LayoutComponent} from "./layout/layout.component";



// @formatter:off
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/explicit-function-return-type */

export const appRoutes: Routes = [

  {path: '', pathMatch : 'full', redirectTo: 'example'  },
  // Redirect signed-in user to the '/example'
  //
  // After the user signs in, the sign-in page will redirect the user to the 'signed-in-redirect'
  // path. Below is another redirection for that path to redirect the user to the desired
  // location. This is a small convenience to keep all main routes together here on this file.
  {path: 'sign-in-redirect', pathMatch : 'full', redirectTo: 'example'  },
  {
    path: '',
    canMatch:[NoAuthGuard],
    component: LayoutComponent,
    data: {
      layout: 'empty'
    },
    children: [
      // {path: 'confirmation-required', loadChildren: () => import('app/modules/auth/confirmation-required/confirmation-required.module').then(m => m.AuthConfirmationRequiredModule)},
      // {path: 'forgot-password', loadChildren: () => import('app/modules/auth/forgot-password/forgot-password.module').then(m => m.AuthForgotPasswordModule)},
      // {path: 'reset-password', loadChildren: () => import('app/modules/auth/reset-password/reset-password.module').then(m => m.AuthResetPasswordModule)},
      {path: 'sign-in', loadChildren: () => import('./modules/auth/sign-in/sign-in.module').then(m => m.AuthSignInModule)},
      // {path: 'sign-up', loadChildren: () => import('app/modules/auth/sign-up/sign-up.module').then(m => m.AuthSignUpModule)}
    ]
  },


];


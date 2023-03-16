import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthSignInComponent} from "./modules/auth/sign-in/sign-in.component";

export const routes: Routes = [

  {path: ' ', pathMatch : 'full', redirectTo: 'sign-in'  },
  {
    path: '',
    // canActivate: [NoAuthGuard],
    // canActivateChild: [],
    component: AuthSignInComponent,
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

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

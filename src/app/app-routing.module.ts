import {Route} from '@angular/router';
import {NoAuthGuard} from "./core/auth/guards/noAuth.guard";
import {LayoutComponent} from "./layout/layout.component";
import {AuthGuard} from "./core/auth/guards/auth.guard";
import {InitialDataResolver} from "./app.resolvers";


// @formatter:off
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
export const appRoutes: Route[] = [
  {path: '', pathMatch: 'full', redirectTo: 'example'},
  {
    path: 'sign-in-redirect',
    pathMatch: 'full',
    redirectTo: 'example',
  },
  {
    path: '',
    canActivate: [NoAuthGuard],
    component: LayoutComponent,
    data: {
      layout: 'empty',
      preload: true
    },
    children: [
      {
        path: 'sign-in',
        loadChildren: () =>
          import('./modules/auth/sign-in/sign-in.module').then(
            (m) => m.AuthSignInModule
          ),
      },
    ],
  },
  {
    path: '',
    component: LayoutComponent,
    data: {
      layout: 'empty',
    },
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./modules/landing/home/home.module').then(
            (m) => m.LandingHomeModule
          ),
      },
    ],
  },
  {
    path: '',
    canActivate: [AuthGuard],
    component: LayoutComponent,
    resolve: {
      initialData: InitialDataResolver,
    },
    children: [
      {
        path: 'example',
        loadChildren: () =>
          import('./modules/admin/example/example.module').then(
            (m) => m.ExampleModule
          ),
      },
    ],
  },
];
// export const appRoutes: Route[] = [
//
//   {path: '', pathMatch : 'full', redirectTo: 'example'  },
//   // Redirect signed-in user to the '/example'
//   //
//   // After the user signs in, the sign-in page will redirect the user to the 'signed-in-redirect'
//   // path. Below is another redirection for that path to redirect the user to the desired
//   // location. This is a small convenience to keep all main routes together here on this file.
//   {path: 'sign-in-redirect', pathMatch : 'full', redirectTo: 'example'  },
//
//   {
//     path: '',
//     canMatch:[NoAuthGuard],
//     component: LayoutComponent,
//     data: {
//       layout: 'empty'
//     },
//     children: [
//       // {path: 'confirmation-required', loadChildren: () => import('app/modules/auth/confirmation-required/confirmation-required.module').then(m => m.AuthConfirmationRequiredModule)},
//       // {path: 'forgot-password', loadChildren: () => import('app/modules/auth/forgot-password/forgot-password.module').then(m => m.AuthForgotPasswordModule)},
//       // {path: 'reset-password', loadChildren: () => import('app/modules/auth/reset-password/reset-password.module').then(m => m.AuthResetPasswordModule)},
//       {path: 'sign-in', loadChildren: () => import('./modules/auth/sign-in/sign-in.module').then(m => m.AuthSignInModule)},
//     ]
//   },
//
//   // Landing routes
//   {
//     path: '',
//     component: LayoutComponent,
//     data: {
//       layout: 'empty'
//     },
//     children: [
//       {path: 'home', loadChildren: () => import('./modules/landing/home/home.module').then(m => m.LandingHomeModule)},
//     ]
//   },
//
//   // Admin routes
//   {
//     path: '',
//     canMatch: [AuthGuard],
//     component: LayoutComponent,
//     resolve: {
//       initialData: InitialDataResolver,
//     },
//     children: [
//       {path: 'example', loadChildren: () => import('app/modules/admin/example/example.module').then(m => m.ExampleModule)},
//     ]
//   }
//
// ];


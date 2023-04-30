import {Route} from '@angular/router';
import {NoAuthGuard} from "./core/auth/guards/noAuth.guard";
import {LayoutComponent} from "./layout/layout.component";
import {AuthGuard} from "./core/auth/guards/auth.guard";
import {InitialDataResolver} from "./app.resolvers";


// @formatter:off
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
export const appRoutes: Route[] = [

  {path: '', pathMatch: 'full',redirectTo:'apps/ecommerce'},
  {
    path: 'signed-in-redirect',
    pathMatch: 'full',
    redirectTo: 'apps/ecommerce',
  },
  {
    path: '',
    canMatch:[NoAuthGuard],
    component:LayoutComponent,
    data:{
      layout:'empty'
    },
    children :[
      {path:'sign-in', loadChildren:() => import ('app/modules/auth/sign-in/sign-in.module').then( m => m.AuthSignInModule )}
]
  },


  // Auth routes for authenticated users
  {
    path: '',
    canMatch:[AuthGuard],
    component: LayoutComponent,
    data:{
      layout: 'empty'
    },
    children: [
      {
        path: 'sign-out',
        loadChildren: () =>
          import('./modules/auth/sign-out/sign-out.module').then(
            (m) => m.AuthSignOutModule
          ),
      }

    ],
  },

  // Lading routes
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

  //Admin routes
  {
    path: '',
    canMatch: [AuthGuard],// Add AuthGuard to protect this route
    component: LayoutComponent,
    resolve: {
      initialData: InitialDataResolver,
    },
    children: [
      {path: 'apps',children :[
          {
            path: 'ecommerce',
          loadChildren: () => import('./modules/admin/apps/ecommerce/ecommerce.module').then(m => m.ECommerceModule)}
      ]},
      ]
  }
    ];


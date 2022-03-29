import { Route } from '@angular/router';
import { AuthGuard } from 'app/core/auth/guards/auth.guard';
import { NoAuthGuard } from 'app/core/auth/guards/noAuth.guard';
import { LayoutComponent } from 'app/layout/layout.component';
import { InitialDataResolver } from 'app/app.resolvers';
import { SigninComponent } from './haya/pages/auth/signin/signin.component';
import { LandingHomeComponent } from './modules/landing/home/home.component';

// @formatter:off
// tslint:disable:max-line-length
export const appRoutes: Route[] = [
    {path: '',  component:SigninComponent},
     
    /*  {
        path: '', 
       
        component  : LayoutComponent,
        data: {
            layout: 'empty'
        },
        
        children : [
            {path: '',pathMatch : 'full', component:LandingHomeComponent},   
            {path: '', pathMatch : 'full', redirectTo: 'SigninComponent'}, 
             

         ]
    },

  
*/

    // Admin routes
    {
        path       : '',
        component  : LayoutComponent,
        resolve    : {
            initialData: InitialDataResolver,
        },
        children   : [
            {path: 'example', loadChildren: () => import('app/modules/admin/example/example.module').then(m => m.ExampleModule)},
            {path: 'users', loadChildren: () => import('app/modules/admin/users/users.module').then(m => m.UsersModule)},
        ]
    }
];

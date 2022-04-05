import { Route } from '@angular/router';
import { AuthGuard } from 'app/core/auth/guards/auth.guard';
import { NoAuthGuard } from 'app/core/auth/guards/noAuth.guard';
import { LayoutComponent } from 'app/layout/layout.component';
import { InitialDataResolver } from 'app/app.resolvers';
import { SigninComponent } from './haya/pages/auth/signin/signin.component';
import { LandingHomeComponent } from './modules/landing/home/home.component';
import { DomaineDactiviteComponent } from './haya/pages/admin/config/domaine-dactivite/domaine-dactivite.component';
import { AddDomaineDactiviteComponent } from './haya/pages/admin/config/add-domaine-dactivite/add-domaine-dactivite.component';
import { EditDomaineDactiviteComponent } from './haya/pages/admin/config/edit-domaine-dactivite/edit-domaine-dactivite.component';
import { InfoCategorieComponent } from './haya/pages/admin/config/info-categorie/info-categorie.component';
import { AddSpecialiteComponent } from './haya/pages/admin/specialite/add-specialite/add-specialite.component';
import { EditSpecialiteComponent } from './haya/pages/admin/specialite/edit-specialite/edit-specialite.component';
import { AllSpecialiteComponent } from './haya/pages/admin/specialite/all-specialite/all-specialite.component';


export const appRoutes: Route[] = [



 {path: '',  component:SigninComponent},

    {
        path       : '',
        component  : LayoutComponent,
        resolve    : {
            initialData: InitialDataResolver,
        },
        children   : [
            {path: 'example', loadChildren: () => import('app/haya/pages/admin/example/example.module').then(m => m.ExampleModule)},
            {path: 'users', loadChildren: () => import('app/haya/pages/admin/users/users.module').then(m => m.UsersModule)},
            {path: 'config', loadChildren: () => import('app/haya/pages/admin/config/config.module').then(m => m.ConfigModule)}, 
            {path: 'newCategorie',  component:AddDomaineDactiviteComponent},
            {path: 'editCategorie/:id',  component:EditDomaineDactiviteComponent},
            {path: 'categorie',  component:DomaineDactiviteComponent},
            {path: 'infocategories/:id',  component:InfoCategorieComponent},
            
            {path: 'specialite', loadChildren: () => import('app/haya/pages/admin/specialite/specialite.module').then(m => m.SpecialiteModule)},
            {path: 'newSpecialite',  component:AddSpecialiteComponent},
            {path: 'editSpecialite/:id',  component:EditSpecialiteComponent},
            {path: 'allSpecialite',  component:AllSpecialiteComponent},

            


        ]
    }
];

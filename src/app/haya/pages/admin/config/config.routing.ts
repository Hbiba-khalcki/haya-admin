import { Route } from '@angular/router';
import { ConfigComponent } from './config.component';
import { DomaineDactiviteComponent } from './domaine-dactivite/domaine-dactivite.component';
import { SpecialiteComponent } from '../specialite/specialite.component';



export const configRoutes: Route[] = [
    {
        path     : '',
        component: ConfigComponent,
        children : [
            {
                path     : '',
                component: DomaineDactiviteComponent
            },
           
        ]
    }
];

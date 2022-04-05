import { Route } from '@angular/router';

import { SpecialiteComponent } from '../specialite/specialite.component';
import { AllSpecialiteComponent } from './all-specialite/all-specialite.component';



export const specialiteRoutes: Route[] = [
    {
        path     : '',
        component: SpecialiteComponent,
        children : [
            {
                path     : '',
                component: AllSpecialiteComponent
            },
           
        ]
    }
];

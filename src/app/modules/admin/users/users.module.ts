import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { UsersComponent } from  'app/modules/admin/users/users.component';

const usersRoutes: Route[] = [
    {
        path     : '',
        component: UsersComponent
    }
];

@NgModule({
    declarations: [
        UsersComponent
    ],
    imports     : [
        CommonModule ,

        RouterModule.forChild(usersRoutes)
    ]
})
export class UsersModule
{
}

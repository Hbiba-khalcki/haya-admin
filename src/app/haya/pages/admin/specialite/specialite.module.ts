import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FuseFindByKeyPipeModule } from '@fuse/pipes/find-by-key';
import { SharedModule } from 'app/shared/shared.module';
import { MatTabsModule } from '@angular/material/tabs';
import { SpecialiteComponent } from '../specialite/specialite.component';
import { specialiteRoutes } from './specialite.routing';
import { AddSpecialiteComponent } from './add-specialite/add-specialite.component';
import { EditSpecialiteComponent } from './edit-specialite/edit-specialite.component';
import { AllSpecialiteComponent } from './all-specialite/all-specialite.component';




@NgModule({
    declarations: [
  
        SpecialiteComponent,
        AddSpecialiteComponent,
        EditSpecialiteComponent,
        AllSpecialiteComponent,
   
    ],
    imports     : [
        CommonModule ,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatProgressBarModule,
        MatSelectModule,
        MatSidenavModule,
        MatSlideToggleModule,
        MatTooltipModule,
        FuseFindByKeyPipeModule,
        SharedModule,
        MatTabsModule,

        RouterModule.forChild(specialiteRoutes)
    ]
})
export class SpecialiteModule
{
}

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
import { ConfigComponent } from './config.component';
import { configRoutes } from './config.routing';
import { DomaineDactiviteComponent } from './domaine-dactivite/domaine-dactivite.component';
import { AddDomaineDactiviteComponent } from './add-domaine-dactivite/add-domaine-dactivite.component';
import { EditDomaineDactiviteComponent } from './edit-domaine-dactivite/edit-domaine-dactivite.component';
import { InfoCategorieComponent } from './info-categorie/info-categorie.component';





@NgModule({
    declarations: [
        ConfigComponent,
        DomaineDactiviteComponent,
        AddDomaineDactiviteComponent,
        EditDomaineDactiviteComponent,
        InfoCategorieComponent
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
        RouterModule.forChild(configRoutes)
    ]
})
export class ConfigModule
{
}

import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FuseDrawerModule } from '@fuse/components/drawer';
import { LayoutComponent } from 'app/layout/layout.component';
import { ClassyLayoutModule } from 'app/layout/layouts/vertical/classy/classy.module';

import { SettingsModule } from 'app/layout/common/settings/settings.module';
import { SharedModule } from 'app/shared/shared.module';
import { EmptyLayoutModule } from './layouts/empty/empty.module';

const layoutModules = [
 
    ClassyLayoutModule,
    EmptyLayoutModule,
 
]
@NgModule({
    declarations: [
        LayoutComponent
    ],
    imports: [
        MatIconModule,
        MatTooltipModule,
        FuseDrawerModule,
        SharedModule,
        SettingsModule,
        ...layoutModules,
    ],
    exports     : [
        LayoutComponent,
        ...layoutModules
    ]
})
export class LayoutModule
{
}

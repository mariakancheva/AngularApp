import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminCampaignComponent } from './admin-campaign/admin-campaign.component';
import { AdminNavigationComponent } from './admin-navigation/admin-navigation.component';
import { AdminCampaignCreateComponent } from './admin-campaign-create/admin-campaign-create.component';
import { AdminCampaignEditComponent } from './admin-campaign-edit/admin-campaign-edit.component';
import { FilterPipe } from 'src/app/core/pipes/filter.pipe';

@NgModule({
    declarations: [
        AdminHomeComponent,
        AdminUsersComponent,
        AdminCampaignComponent,
        AdminNavigationComponent,
        AdminCampaignCreateComponent,
        AdminCampaignEditComponent,
        FilterPipe
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AdminRoutingModule,
    ],
    exports: [
    ]
})

export class AdminModule { }
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminCampaignComponent } from './admin-campaign/admin-campaign.component';
import { AdminCampaignCreateComponent } from './admin-campaign-create/admin-campaign-create.component';
import { AdminCampaignEditComponent } from './admin-campaign-edit/admin-campaign-edit.component';
import { SearchUserCityComponent } from './search-user-city/search-user-city.component';
import { SearchUserBotypeComponent } from './search-user-botype/search-user-botype.component';

const adminRoutes: Route[] = [
    { path: '', component: AdminHomeComponent },
    { path: 'users', component: AdminUsersComponent },
    { path: 'users/searchByCity', component: SearchUserCityComponent },
    { path: 'users/searchByABO', component: SearchUserBotypeComponent },
    { path: 'campaign', component: AdminCampaignComponent },
    { path: 'campaign/create', component: AdminCampaignCreateComponent },
    { path: 'campaign/edit/:id', component: AdminCampaignEditComponent },

]

@NgModule({
    imports: [
        RouterModule.forChild(adminRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AdminRoutingModule { }
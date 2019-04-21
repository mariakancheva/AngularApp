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
import { SearchUserCityComponent } from './search-user-city/search-user-city.component';
import { SearchUserBotypeComponent } from './search-user-botype/search-user-botype.component';
import { AdminNewsCreateComponent } from './admin-news-create/admin-news-create.component';
import { AdminNewsComponent } from './admin-news/admin-news.component';

@NgModule({
    declarations: [
        AdminHomeComponent,
        AdminUsersComponent,
        AdminCampaignComponent,
        AdminNavigationComponent,
        AdminCampaignCreateComponent,
        AdminCampaignEditComponent,
        FilterPipe,
        SearchUserCityComponent,
        SearchUserBotypeComponent,
        AdminNewsCreateComponent,
        AdminNewsComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AdminRoutingModule,
    ],
    exports: [
        AdminNewsComponent
    ]
})

export class AdminModule { }
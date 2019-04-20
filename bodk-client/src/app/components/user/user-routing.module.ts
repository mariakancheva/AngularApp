import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserProfileEditComponent } from './user-profile-edit/user-profile-edit.component';
import { UserProfileDetailsComponent } from './user-profile-details/user-profile-details.component';
import { UserCampaignComponent } from './user-campaign/user-campaign.component';
import { ProfileGuard } from 'src/app/core/guards/profile.guard';

const userRoutes:Route[] = [
    { path:'', component: UserHomeComponent },
    { path: 'profile', component: UserProfileComponent },
    { path: 'profile/edit',component:UserProfileEditComponent, canActivate:[ProfileGuard]},
    { path: 'profile/details',component:UserProfileDetailsComponent, canActivate:[ProfileGuard]},
    { path: 'campaign', component:UserCampaignComponent}
]

@NgModule({
    imports:[
        RouterModule.forChild(userRoutes)
    ],
    exports:[
        RouterModule
    ]
})

export class UserRoutingModule{}
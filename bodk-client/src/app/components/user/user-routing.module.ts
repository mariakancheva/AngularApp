import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserProfileEditComponent } from './user-profile-edit/user-profile-edit.component';

const userRoutes:Route[] = [
    { path:'', component: UserHomeComponent },
    { path: 'profile', component: UserProfileComponent },
    { path: 'profile/edit',component:UserProfileEditComponent}
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
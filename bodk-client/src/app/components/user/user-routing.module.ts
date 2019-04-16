import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const userRoutes:Route[] = [
    { path:'', component: UserHomeComponent },
    { path: 'profile', component: UserProfileComponent },
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
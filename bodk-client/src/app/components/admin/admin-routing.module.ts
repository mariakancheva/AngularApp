import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminCampainComponent } from './admin-campain/admin-campain.component';

const adminRoutes:Route[] = [
    { path:'', component: AdminHomeComponent },
    { path: 'users', component: AdminUsersComponent },
    { path:'campain',component:AdminCampainComponent},
    { path: 'campain/edit', component:AdminCampainComponent},
    
]

@NgModule({
    imports:[
        RouterModule.forChild(adminRoutes)
    ],
    exports:[
        RouterModule
    ]
})

export class AdminRoutingModule{}
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminCampainComponent } from './admin-campain/admin-campain.component';

@NgModule({
    declarations: [
        AdminHomeComponent,
        AdminUsersComponent,
        AdminCampainComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AdminRoutingModule
    ],
    exports: [
    ]
})

export class AdminModule { }
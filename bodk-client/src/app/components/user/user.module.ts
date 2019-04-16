import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { UserHomeComponent } from './user-home/user-home.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserRoutingModule } from './user-routing.module';
import { UserProfileEditComponent } from './user-profile-edit/user-profile-edit.component';

@NgModule({
    declarations: [
        UserHomeComponent,
        UserProfileComponent,
        UserProfileEditComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        UserRoutingModule
    ],
    exports: [
        UserHomeComponent,
        UserProfileComponent
    ]
})

export class UserModule { }
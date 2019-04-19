import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { UserHomeComponent } from './user-home/user-home.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserRoutingModule } from './user-routing.module';
import { UserProfileEditComponent } from './user-profile-edit/user-profile-edit.component';
import { UserProfileDetailsComponent } from './user-profile-details/user-profile-details.component';

@NgModule({
    declarations: [
        UserHomeComponent,
        UserProfileComponent,
        UserProfileEditComponent,
        UserProfileDetailsComponent,
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
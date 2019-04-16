import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { UserHomeComponent } from './user-home/user-home.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
    declarations: [
        UserHomeComponent,
        UserProfileComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        UserRoutingModule
    ],
    exports: [
        UserHomeComponent,
        UserProfileComponent
    ]
})

export class UserModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import { LandingComponent } from '../landing/landing.component';
import { FooterComponent } from '../footer/footer.component';

@NgModule({
    declarations: [
        HeaderComponent,
        LandingComponent,
        FooterComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,

    ],
    exports: [
        HeaderComponent,
        LandingComponent,
        FooterComponent
    ]
})
export class SharedModule { }
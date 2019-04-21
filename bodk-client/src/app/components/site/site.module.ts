import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms'
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { DonationComponent } from './donation/donation.component';
import { SiteRoutingModule } from './site-routing.module';
import { NewsComponent } from './news/news.component';

@NgModule({
    declarations:[
        HomeComponent,
        AboutUsComponent,
        ContactComponent,
        DonationComponent,
        NewsComponent,

    ],
    imports:[
        CommonModule,
        FormsModule,
        SiteRoutingModule
    ],
    exports:[
        HomeComponent,
        AboutUsComponent,
        ContactComponent,
        DonationComponent,
    ]
})

export class SiteModule{}
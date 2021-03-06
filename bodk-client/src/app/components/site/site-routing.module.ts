import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { DonationComponent } from './donation/donation.component';
import { NewsComponent } from './news/news.component';

const siteRoutes:Route[] = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutUsComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'donation', component: DonationComponent },
    { path: 'news', component:NewsComponent}
]

@NgModule({
    imports:[
        RouterModule.forChild(siteRoutes)
    ],
    exports:[
        RouterModule
    ]
})

export class SiteRoutingModule{}
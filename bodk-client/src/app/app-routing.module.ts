import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/authentication/login/login.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { HomeComponent } from './components/site/home/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component:HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'site', loadChildren:'./components/site/site.module#SiteModule'},
  { path: 'users', loadChildren:'./components/user/user.module#UserModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers:[],
  exports: [RouterModule]
})
export class AppRoutingModule { }

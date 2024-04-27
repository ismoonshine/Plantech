import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutingRoutingModule } from './routing-routing.module';
import { Routes } from '@angular/router';
import { AuthentificationComponent } from '../authentification/authentification.component';
import { RegisterComponent } from '../register/register.component';
import { ProfileComponent } from '../profile/profile.component';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RoutingRoutingModule,
    AuthentificationComponent,
    RegisterComponent,
    ProfileComponent
  ]
})
export class RoutingModule { }
export const routes: Routes = [
  { path: 'authentification', component: AuthentificationComponent},
  {path : 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent},
];
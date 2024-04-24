import { RouterModule, Routes } from '@angular/router';
import { AuthentificationComponent } from './authentification/authentification.component';
import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
    // Define the route for the authentification component
    { path: 'authentification', component: AuthentificationComponent},
    {path : 'register', component: RegisterComponent},
    {path: 'profile', component: ProfileComponent},
    


    // Add more routes as needed
];
@NgModule({
    imports: [CommonModule, RouterModule.forRoot(routes,{enableTracing: true})],
    exports: [RouterModule],
})
export class  AppRoutingModule {};
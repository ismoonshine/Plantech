import { RouterModule, Routes } from '@angular/router';
import { AuthentificationComponent } from './authentification/authentification.component';
import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { RoutingModule } from './routing/routing.module';

export const routes: Routes = [
    // Define the route for the authentification component
    //{ path: 'register', loadChildren: ()=> import('./routing/routing.module').then(r=>r.RoutingModule)},
    {path:'register', loadComponent:()=>import('./register/register.component').then(c=>c.RegisterComponent)},
    {path: 'profile', component: ProfileComponent},
];
@NgModule({
    imports: [CommonModule, RouterModule.forRoot(routes,{enableTracing: true})],
    exports: [RouterModule],
})
export class  AppRoutingModule {};
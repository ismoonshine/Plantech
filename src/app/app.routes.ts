import { RouterModule, Routes } from '@angular/router';
import { AuthentificationComponent } from './authentification/authentification.component';
import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { RoutingModule } from './routing/routing.module';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { Terrain } from './terrain';
import { AjouterterrainComponent } from './ajouterterrain/ajouterterrain.component';

export const routes: Routes = [
    //{ path: 'register', loadChildren: ()=> import('./routing/routing.module').then(r=>r.RoutingModule)},
    {path:'register', loadComponent:()=>import('./register/register.component').then(c=>c.RegisterComponent)},
    {path: 'profile', component: ProfileComponent},
    {path: 'authentification', component:AuthentificationComponent},
    {path: '', component:AcceuilComponent},
    {path: 'acceuil', component:AcceuilComponent},
    {path:'terrain', component: AjouterterrainComponent}
    
];
@NgModule({
    imports: [CommonModule, RouterModule.forRoot(routes,{enableTracing: true})],
    exports: [RouterModule],
})
export class  AppRoutingModule {};
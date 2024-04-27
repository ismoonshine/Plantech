import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { RegisterComponent } from '../register/register.component';

const routes: Routes = [
  {path: '', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingRoutingModule { }

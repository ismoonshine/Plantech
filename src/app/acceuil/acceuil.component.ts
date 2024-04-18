import { Component ,OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RegisterComponent } from '../register/register.component';

export const routes: Routes =[
  {'path':"register", component: RegisterComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
@Component({
  selector: 'app-acceuil',
  standalone: true,
  imports: [],
  templateUrl: './acceuil.component.html',
  styleUrl: './acceuil.component.css'
})
export class AcceuilComponent implements  OnInit{
  ngOnInit(): void {
  }
}

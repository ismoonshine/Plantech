import { Component ,OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from '../app.routes';
import { NgModule } from '@angular/core';

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

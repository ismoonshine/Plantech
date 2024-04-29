import { Component, OnInit } from '@angular/core';
import { RouterLink, Routes } from '@angular/router';
import { AcceuilComponent } from '../acceuil/acceuil.component';
import { ProfileComponent } from '../profile/profile.component';
import { RouterOutlet } from '@angular/router';
export const routes: Routes =[
  {'path':"acceuil", component: AcceuilComponent },
  {'path':"profil", component: ProfileComponent },
  {'path':"Terrain", /*component : TerrainComponent*/ },
  {'path':"Info",},
  {'path':"contact"},
]

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{

  ngOnInit(): void {
  }
}
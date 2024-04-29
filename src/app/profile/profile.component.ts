import { Component, OnInit } from '@angular/core';
import { PropComponent } from '../prop/prop.component';
import { Terrain } from '../terrain';
import { TerrainService } from '../register/services/user/terrain.service';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [PropComponent, NgFor],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{

    terrains: Terrain[] = [];
    constructor(public terrainService: TerrainService) { }

    ngOnInit(): void {
      this.chargerTerrain()

      
    }
    chargerTerrain(){
      this.terrainService.getAllTerrains().subscribe(
        {
          next : (response:any) => {this.terrains = response},
        error : (error) => {console.log(error)}
    });
    }
    }
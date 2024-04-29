import { Component, OnInit } from '@angular/core';
import { TerrainService } from '../register/services/user/terrain.service';
import { Terrain } from '../terrain';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-ajouterterrain',
  standalone: true,
  imports: [FormsModule, HttpClientModule, NgIf],
  templateUrl: './ajouterterrain.component.html',
  styleUrl: './ajouterterrain.component.css'
})
export class AjouterterrainComponent implements OnInit{
  constructor(public  terrainService : TerrainService) {}
  errors:string="";
  
  t:Terrain= new  Terrain();
ajouterterrain(){
  this.errors = "";
    if(this.t.NomTerrain==null || this.t.Prix== null)
      {
        this.errors = "Veuillez saisir  tous les champs.";
      }
      else 
      this.terrainService.ajouterterrain(this.t).subscribe(
    {
      next:(response:any)=> {
        let msg=response.msg;
        alert(msg);
      },
      error:(error)=> {console.log("Error",error)}
    })


}

  ngOnInit(): void {
  }
  
}

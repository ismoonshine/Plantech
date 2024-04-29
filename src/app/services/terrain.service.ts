import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Terrain } from '../terrain';

@Injectable({
  providedIn: 'root'
})
export class TerrainService {
  url= "http://localhost/Plantech/ajouterterrain.php";
  constructor(public http:HttpClient) { }
  


  ajouterterrain(t:Terrain) 
  {
    return this.http.post(this.url, t);

  }
  supprimerterrain(CodeTerrain:number) 
  {
    return this.http.delete(this.url+"?CodeTerrain="+CodeTerrain);
  }
  modifierterrain(c:Terrain)
  {
    return this.http.put(this.url, c);
  }
  getAllTerrains()
  {
    return this.http.get("http://localhost/Plantch/ajouterterrain.php");
  }
}

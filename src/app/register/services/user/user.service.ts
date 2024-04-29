import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../../user';

@Injectable({
providedIn: 'root'
})
export class UserService {
private apiUrl = 'http://localhost/Plantech/prop.php';

constructor(private http: HttpClient) { }

ajouteruser(u:User) 
{
    return this.http.post(this.apiUrl, u);

}
supprimerterrain(CodeTerrain:number) 
{
    return this.http.delete(this.apiUrl+"?CodeTerrain="+CodeTerrain);
}
modifierterrain(u:User)
{
    return this.http.put(this.apiUrl, u);
}
getAllTerrains()
{
    return this.http.get("http://localhost/Plantch/prop.php");
}
}

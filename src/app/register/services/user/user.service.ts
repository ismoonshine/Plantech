import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
providedIn: 'root'
})
export class UserService {
private apiUrl = 'http://localhost/phpmyadmin/index.php';

constructor(private http: HttpClient) { }

getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
}

addUser(user: { id_utilisateur:number, name: string, CIN:number, email: string, mdp:string, num_tel:number }): Observable<any> {
    return this.http.post<any>(this.apiUrl, user);
}
}

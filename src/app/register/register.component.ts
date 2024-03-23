import { Component, OnInit} from '@angular/core';
import { UserService } from './services/user/user.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{
  constructor(private userService: UserService) {}
  ngOnInit(): void {
      
  }
  addUser(): void {
    let id_utilisateur=0;
    let name = String(document.getElementById('name')?.textContent);
    let email= String(document.getElementById('email')?.textContent);
    let password=String(document.getElementById('mdp')?.textContent);
    let num_tel= Number(document.getElementById('num_tel')?.textContent);
    let CIN=Number(document.getElementById('CIN')?.textContent);
  
    const newUser = {id_utilisateur:id_utilisateur++, name: name, CIN:CIN, email: email, mdp:password, num_tel:num_tel };
    this.userService.addUser(newUser).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.error(error);
      }
      
    );
  }
}

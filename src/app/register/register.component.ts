import { Component, OnInit, NgModule} from '@angular/core';
import { UserService } from './services/user/user.service';
import { HttpClientModule } from '@angular/common/http';
import { Session } from 'inspector';
import { User } from '../user';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [HttpClientModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{

  u:User= new User();
  ajouteruser(){

  }




  url:String= "http://localhost/Plantech/prop.php"
  //link service to componant 
  constructor(private us: UserService) {}
  onSubmit(formData: any): void {
      // Call UserService to register user
      this.us.ajouteruser(formData).subscribe(
        (response) => {
          // Handle success
          console.log('User registered successfully:', response);
          // Optionally, you can redirect the user or show a success message
        },
        (error) => {
          // Handle error
          console.error('Error registering user:', error);
          // Optionally, you can show an error message to the user
        }
      );
    }
  ngOnInit(): void {

  }
  }

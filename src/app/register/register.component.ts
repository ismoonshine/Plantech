import { Component, OnInit, NgModule} from '@angular/core';
import { UserService } from './services/user/user.service';
import { HttpClientModule } from '@angular/common/http';
import { Session } from 'inspector';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [HttpClientModule,],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{
  constructor(private userService: UserService) {}
  onSubmit(formData: any): void {
    if (this.validateInputs(formData)) {
      // Call UserService to register user
      this.userService.addUser(formData).subscribe(
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
  }
  private validateInputs(formData: any): boolean {
    const nameVal: string = formData.name.trim();
    const emailVal: string = formData.email.trim();
    const passwordVal: string = formData.password.trim();
    const numTelVal: string = formData.num_tel.trim();
    const CINVal: string = formData.CIN.trim();


  }
  id_user:number=1;
  sessions:any[]=[];

  ngOnInit(): void {
      
  }
}

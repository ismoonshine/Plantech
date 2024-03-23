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
  ngOnInit(): void {
      
  }
}

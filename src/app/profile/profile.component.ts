import { Component, OnInit } from '@angular/core';
import { PropComponent } from '../prop/prop.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [PropComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{
  ngOnInit(): void {
  }
}

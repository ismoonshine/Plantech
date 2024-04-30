import { Component, OnInit } from '@angular/core';
import { TerrainService } from '../register/services/user/terrain.service';
import { Terrain } from '../terrain';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'; // Removed NgModel, FormsModule, HttpClientModule, NgIf imports
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-ajouterterrain',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf ],
  templateUrl: './ajouterterrain.component.html',
  styleUrl: './ajouterterrain.component.css'
})
export class AjouterterrainComponent implements OnInit {
  terrainForm!: FormGroup;
  errors: string = '';
  t: Terrain = {}; // Corrected type declaration for 't'
  
  constructor(private formBuilder: FormBuilder, private terrainService: TerrainService) { } // Inject TerrainService
  ngOnInit(): void {
    this.terrainForm = this.formBuilder.group({
      NomTerrain: ['', Validators.required],
      Localisation: ['', Validators.required],
      Dimention: ['', [Validators.required]],
      Prix: ['', Validators.required],
      Disponibilite: [false, Validators.required]
    });
  }

  ajouterterrain(): void {
    console.log(1);
    console.log(this.terrainForm.value.NomTerrain); // Logging form values
    this.errors = '';
    if (this.terrainForm.invalid) {
      this.errors = 'Veuillez saisir tous les champs.';
      return; // Exit function if form is invalid
    }
    this.terrainService.ajouterterrain(this.terrainForm.value).subscribe(
      (response: any) => {
        let msg = response.msg;
        alert(msg);
      },
      (error: any) => {
        console.log('Error', error);
      }
    );
  }
}

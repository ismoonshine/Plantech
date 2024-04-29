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

fetch('Etudiant.json')
    .then((response: Response) => response.json())
    .then((data: any[]) => {
        if (data && data.length > 0) {
            let table: string = '<table border="2">';
            table += '<tr><th>CIN</th><th>Nom</th><th>Prénom</th><th>Date de naissance</th><th>Clubs</th><th>Redoublant</th><th>Moyenne</th></tr>';
            data.forEach((student: any) => {
                table += '<tr>';
                table += '<td>' + student.cin + '</td>';
                table += '<td>' + student.nom + '</td>';
                table += '<td>' + student.prenom + '</td>';
                table += '<td>' + student.date_naissance + '</td>';
                table += '<td>' + student.clubs.join(', ') + '</td>';
                table += '<td>' + (student.redoublant ? "Oui" : "Non") + '</td>';
                table += '<td>' + student.moyenne + '</td>';
                table += '</tr>';
            });
            table += '</table>';
            const tableElement: HTMLElement | null = document.getElementById("tableetudiant");
            if (tableElement) {
                tableElement.innerHTML = table;
            }
        } else {
            const tableElement: HTMLElement | null = document.getElementById("tableetudiant");
            if (tableElement) {
                tableElement.innerHTML = "Aucune donnée d'étudiant disponible.";
            }
        }
    });

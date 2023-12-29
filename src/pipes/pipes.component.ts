import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class PipesComponent {

  upper: string = 'Hello World';
  lower: string = 'SALUT LES FULLSTACK, ON SE CONCENTRE ANGULAR C EST CHOUETTE';
  dateDeJour: Date = new Date();
  pipeValue: number = 5;
}

import { Component,OnInit  } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-images',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './images.component.html',
  styleUrl: './images.component.css'
})

  export class ImagesComponent implements OnInit {
    images: any[] = [];
  
    ngOnInit(): void {
      fetch('https://jsonplaceholder.typicode.com/photos')
        .then((response) => response.json())
        .then((data) => (this.images = data))
        .catch((error) => console.error('Erreur de chargement des images', error));
    }
  }


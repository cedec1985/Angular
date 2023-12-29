import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';    
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-comp3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comp3.component.html',
  styleUrl: './comp3.component.css'
})

export class Comp3Component implements OnInit {
  id!: string;

  constructor(private route: ActivatedRoute) { }        // le package pour gérer la route actuelle, celle qui est activée en ce moment
                                                        // forcément dans ce composant, on est sur l'URL : /comp3/....
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {           // on souscrit au paramMap de l'objet : route pour accéder à toutes les informations de celui-ci
      this.id = 'comp3Id';                  // on récupère : comp3Id que l'on affecte à id pour qu'il soit visible dans la vue
    });
  }
}
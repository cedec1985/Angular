import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Service/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  imports: [CommonModule,FormsModule,ReactiveFormsModule]
})
export class AdminComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  seDeconnecter(){
  // Appel de la méthode seConnecter du service AuthService avec le nom et le mot de passe de l'utilisateur//
      // Si la connexion réussit, rediriger vers la page Admin
      (this.router.navigate(['/Connexion']),
      // Sinon, afficher un message d'erreur
      console.log('vous êtes déconnecté!')
    );
  }
}



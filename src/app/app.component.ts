import { CommonModule } from '@angular/common';
import { Component, PipeTransform} from '@angular/core';
import { Router, RouterOutlet,RouterLink} from '@angular/router';
import { HeaderComponent } from '../partials/header/header.component';
import { FooterComponent } from '../partials/footer/footer.component';
import { ChronoComponent } from '../chrono/chrono.component';
import { Comp11mComponent} from '../comp1/comp11m/comp11m.component';
import { Comp12mComponent } from '../comp1/comp12m/comp12m.component';
import { Comp1uComponent } from '../comp1u/comp1u.component';
import { Comp1Component } from '../comp1/comp1.component';
import { Comp3Component } from '../comp3/comp3.component';
import { PipesComponent } from '../pipes/pipes.component';
import { NavComponent } from '../nav/nav.component';
import { FormRegisterComponent } from '../register/form-register.component';
import { CartComponent } from '../exercices/shopping-cart-2/cart/cart.component';
import { ArticleComponent } from '../exercices/shopping-cart-2/article/article.component';
import { Article2Component } from '../exercices/shopping-cart-3/article/article2.component';
import { ShoppingCartComponent } from '../exercices/shopping-cart/shopping-cart.component';
import { ExercicesComponent } from '../exercices/exercices.component';
import { ConnexionComponent } from '../connexion/connexion.component';
import { HttpClientModule } from '@angular/common/http';
import{ReactiveFormsModule} from '@angular/forms';
import { BlogComponent } from '../data/blog/blog.component';
import { ImagesComponent } from '../data/images/images.component';
import { UsersComponent } from '../data/users/users.component';
import { FormulaireInscriptionComponent } from '../InscriptionForm/formulaire-inscription/formulaire-inscription.component';
import { TodoDisplayComponent } from '../todo/todo-display/todo-display.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule,RouterOutlet,HeaderComponent,FooterComponent,ChronoComponent,Comp11mComponent,Comp12mComponent,Comp1uComponent,Comp1Component,Comp3Component,RouterLink,PipesComponent,NavComponent,FormRegisterComponent,ExercicesComponent,ShoppingCartComponent,ArticleComponent,Article2Component,CartComponent,ConnexionComponent,HttpClientModule,ReactiveFormsModule,BlogComponent,ImagesComponent,UsersComponent,FormulaireInscriptionComponent,TodoDisplayComponent]
})
export class AppComponent implements PipeTransform{

  comp3Id = 2024;
 
   goToPageComp3(): void {
    const itemId = Math.floor(Math.random() * Math.floor(2500));


    this.router.navigate(['/comp3', itemId]);

  }
  constructor( private router: Router) { }
  upper: string = 'Hello World';
  lower: string = 'SALUT LES FULLSTACK, ON SE CONCENTRE ANGULAR C EST CHOUETTE';
  dateDeJour: Date = new Date();
  pipeValue: number = 5;

  transform(value: unknown): unknown {
    return value + ' €';
  }
  }



  

  









  


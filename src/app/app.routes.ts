import { NgModule } from '@angular/core';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { ChronoComponent } from '../chrono/chrono.component';
import { HeaderComponent } from '../partials/header/header.component';
import { FooterComponent } from '../partials/footer/footer.component';
import { Comp1Component } from '../comp1/comp1.component';
import { Comp2Component } from '../comp2/comp2.component';
import { Comp3Component } from '../comp3/comp3.component';
import { Comp11mComponent } from '../comp1/comp11m/comp11m.component';
import { Comp12mComponent } from '../comp1/comp12m/comp12m.component';
import { Comp1uComponent } from '../comp1u/comp1u.component';
import { PipesComponent } from '../pipes/pipes.component';
import { FormRegisterComponent } from '../register/form-register.component';
import { ArticleComponent } from '../exercices/shopping-cart-2/article/article.component';
import { ShoppingCartComponent } from '../exercices/shopping-cart/shopping-cart.component';
import { BlogComponent } from '../data/blog/blog.component';
import { ImagesComponent } from '../data/images/images.component';
import { UsersComponent } from '../data/users/users.component';
import { FormulaireInscriptionComponent } from '../InscriptionForm/formulaire-inscription/formulaire-inscription.component';
import { TodoDisplayComponent } from '../todo/todo-display/todo-display.component';

export const routes: Routes = [
  {path: 'app', component: AppComponent},
  {path: 'chrono', component: ChronoComponent},
  {path:'partials/header', component: HeaderComponent},
  {path:'partials/footer', component: FooterComponent},
  { path: 'comp1', component: Comp1Component,       // comp1 possède des enfants, donc il faudra mettre <router-outlet></router-outlet> dans comp1.component.html
  children: [       
    { path: 'comp11m', component: Comp11mComponent },           // sera projeté dans <router-outlet> de : comp1.component.html
    { path: 'comp12m', component: Comp12mComponent },           // sera projeté dans <router-outlet> de : comp1.component.html
  ]
},
{ path: 'comp1/comp1u', component: Comp1uComponent },         // une URL à 2 niveaux : /comp1/comp1u associée à un composant
{ path: 'comp2', component: Comp2Component },                 // une URL à 1 niveau : /comp2 associée à un composant
{ path: 'comp3/:comp3Id', component: Comp3Component },        // ':' pour indiquer que c'est une variable qui peut prendre n'importe quelle valeur
                                                              // en l'absence d'URL sur le navigateur, on redirige vers : /comp1
{ path: 'pipes', component: PipesComponent },
{path:'register', component: FormRegisterComponent},
{path: 'exercices/shoppingCart', component: ShoppingCartComponent},
  {path: 'exercices/shoppingCartV2', component: ArticleComponent},
  {path: 'exercices', loadChildren: () =>
import('../exercices/exercices.module').then(m => m.ExercicesModule)
},
{path: 'connexion', component: FormulaireInscriptionComponent},
{ path: 'data/images', component: ImagesComponent },
{path: 'data/blog', component: BlogComponent},
{path: 'data/users', component: UsersComponent},
{path: 'todo/todo-display', component: TodoDisplayComponent},
{path: 'todo', loadChildren: () =>
import('../todo/todo.module').then(m => m.TodoModule)
}
]
@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule,RouterOutlet],
  exports: [RouterModule,CommonModule],
})
export class AppRoutingRoutingModule { }

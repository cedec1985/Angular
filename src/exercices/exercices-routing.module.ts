import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExercicesComponent } from './exercices.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ArticleComponent } from './shopping-cart-2/article/article.component';
import {Article2Component} from "./shopping-cart-3/article/article2.component";

const routes: Routes = [
  {path: 'exercices', component: ExercicesComponent, children: [
    {path: 'shoppingCart', component: ShoppingCartComponent},
    {path: 'shoppingCartV2', component: ArticleComponent},
    {path: 'shoppingCartV3', component: Article2Component}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExercicesRoutingModule { }

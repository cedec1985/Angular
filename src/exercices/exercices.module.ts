import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExercicesRoutingModule } from './exercices-routing.module';
import { ButtonModule } from 'primeng/button';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { FormsModule } from '@angular/forms';
import { CartComponent } from './shopping-cart-2/cart/cart.component';
import { ArticleComponent } from './shopping-cart-2/article/article.component';
import { Article2Component } from './shopping-cart-3/article/article2.component';
import { ExercicesComponent } from './exercices.component';


@NgModule({
  declarations: [   
  ],
  imports: [
    CommonModule,
    ExercicesRoutingModule,
    ButtonModule,
    FormsModule,
    ArticleComponent,
    CartComponent,
    ShoppingCartComponent,
    Article2Component,
    ExercicesComponent

  ],
  exports: [ExercicesComponent]
})
export class ExercicesModule { }

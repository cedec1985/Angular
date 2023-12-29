import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { PartialsModule } from '../partials/partials.module';
import { HeaderComponent } from '../partials/header/header.component';
import { FooterComponent } from '../partials/footer/footer.component';
import { ChronoModule } from '../chrono/chrono.module';
import { ChronoComponent } from '../chrono/chrono.component';
import { RouterOutlet } from '@angular/router';
import { Comp1Component } from '../comp1/comp1.component';
import { Comp11mComponent } from '../comp1/comp11m/comp11m.component';
import { Comp12mComponent } from '../comp1/comp12m/comp12m.component';
import { Comp2Component } from '../comp2/comp2.component';
import { Comp3Component } from '../comp3/comp3.component';
import { Comp1uComponent } from '../comp1u/comp1u.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesComponent } from '../pipes/pipes.component';
import { NavComponent } from '../nav/nav.component';
import { RegisterModule } from '../register/register.module';
import { FormRegisterComponent } from '../register/form-register.component';
import { CommonModule} from '@angular/common';
import { MaterialDesignModule } from '../register/material-design.module';
import { ArticleComponent } from '../exercices/shopping-cart-2/article/article.component';
import { CartComponent } from '../exercices/shopping-cart-2/cart/cart.component';
import { ButtonModule } from 'primeng/button';
import { ShoppingCartComponent } from '../exercices/shopping-cart/shopping-cart.component';
import { ExercicesRoutingModule } from '../exercices/exercices-routing.module';
import { ExercicesComponent } from '../exercices/exercices.component';
import { Article2Component } from '../exercices/shopping-cart-3/article/article2.component';
import { ShoppingCartService } from '../exercices/shopping-cart-3/services/shopping-cart.service';
import { MyCustomValidatorDirective } from '../directives/my-custom-validator.directive';
import {CookieService} from 'ngx-cookie-service';
import { FakeAuthComponent } from '../fake-auth/fake-auth.component';
import { ConnexionComponent } from '../connexion/connexion.component';
import { HttpClientModule } from '@angular/common/http';
import { BlogComponent } from '../data/blog/blog.component';
import { BlogService } from './blog.service';
import { ImagesComponent } from '../data/images/images.component';
import { UsersComponent } from '../data/users/users.component';
import { DataService } from './data.service';
import { FormulaireInscriptionComponent } from '../InscriptionForm/formulaire-inscription/formulaire-inscription.component';
import { TodoModule } from '../todo/todo.module';
import { TodoDisplayComponent } from '../todo/todo-display/todo-display.component';
import { TodoHttpService } from '../todo/services/todo-http.service';
import { TodoRoutingModule } from '../todo/todo-routing.module';
import { TodoComponent } from '../todo/todo.component';

@NgModule({
  imports:      [ BrowserModule, PartialsModule, ChronoModule,RouterOutlet,FormsModule,RegisterModule,CommonModule,ReactiveFormsModule,MaterialDesignModule,ButtonModule,ExercicesRoutingModule,
  ButtonModule, ArticleComponent, CartComponent, ShoppingCartComponent, Article2Component, ExercicesComponent,ShoppingCartService,FakeAuthComponent,ConnexionComponent,HttpClientModule,BlogComponent,ImagesComponent,UsersComponent,TodoModule,TodoRoutingModule],
  exports: [ ChronoComponent,HeaderComponent,FooterComponent,PipesComponent,NavComponent,FormRegisterComponent,ArticleComponent,CartComponent,ShoppingCartComponent,Article2Component,ExercicesComponent,FakeAuthComponent,ConnexionComponent,BlogComponent,ImagesComponent,UsersComponent,FormulaireInscriptionComponent,TodoDisplayComponent,TodoComponent],
  declarations: [AppComponent,ChronoComponent,FooterComponent,HeaderComponent,Comp1Component,Comp11mComponent,Comp12mComponent,Comp2Component,Comp3Component,
    Comp1uComponent,PipesComponent,NavComponent,FormRegisterComponent,ShoppingCartService,MyCustomValidatorDirective,ConnexionComponent],
  bootstrap:    [ AppComponent],
  providers:[CookieService,BlogService,DataService,TodoHttpService]
})
export class AppModule {}

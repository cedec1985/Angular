import {Component, OnInit} from '@angular/core';
import {IArticle} from "../../shopping-cart-2/article/article.component";
import {ShoppingCartService} from "../services/shopping-cart.service";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-article',
  templateUrl: './article2.component.html',
  styleUrls: ['./article2.component.css'],
  standalone: true,
  imports:[CommonModule]
})
export class Article2Component implements OnInit {

  articles: IArticle[] = [
    {id: 1, name: 'Pomme', price: 0.89},
    {id: 2, name: 'Poire', price: 0.89},
    {id: 3, name: 'Pack d\'eau plate', price: 8.79},
    {id: 4, name: 'Jus d\'orange', price: 2.69},
    {id: 5, name: 'Sel', price: 3.59},
    {id: 6, name: 'Tarte aux pommes', price: 12.59},
    {id: 7, name: 'Shampooing', price: 7.80},
    {id: 8, name: 'Fromage', price: 3.23},
    {id: 9, name: 'Piments', price: 3.99},
    {id: 10, name: 'La réponse à l\'univers', price: 42}
  ]
  cart: IArticle[] = [];

  constructor(private shoppingCartService: ShoppingCartService) {}

  ngOnInit(): void {
    this.cart = this.shoppingCartService.getCart();
  }

  addToCart(article: IArticle): void {
    this.shoppingCartService.addToCart(article);
    this.updateCart();
  }

  removeFromCart(articleId: number): void {
    this.shoppingCartService.removeFromCart(articleId);
    this.updateCart();
  }

  private updateCart(): void {
    this.cart = this.shoppingCartService.getCart();
  }
}

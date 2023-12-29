import { Injectable } from '@angular/core';
import {IArticle} from "../../shopping-cart-2/article/article.component";

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private storageKey = 'shoppingCart';

  addToCart(article: IArticle): void {
    let cart: IArticle[] = this.getCart();
    const existingArticle = cart.find(item => item.id === article.id);

    if (existingArticle) {
      existingArticle.quantity = (existingArticle.quantity || 0) + 1;
    } else {
      cart.push({ ...article, quantity: 1 });
    }

    localStorage.setItem(this.storageKey, JSON.stringify(cart));
  }

  removeFromCart(articleId: number): void {
    let cart: IArticle[] = this.getCart();
    const articleIndex = cart.findIndex(item => item.id === articleId);

    if (articleIndex !== -1) {
      if (cart[articleIndex].quantity && cart[articleIndex].quantity! > 1) {
        cart[articleIndex].quantity! -= 1;
      } else {
        cart.splice(articleIndex, 1);
      }
    }

    localStorage.setItem(this.storageKey, JSON.stringify(cart));
  }

  getCart(): IArticle[] {
    const cartJson = localStorage.getItem(this.storageKey);
    return cartJson ? JSON.parse(cartJson) : [];
  }
}

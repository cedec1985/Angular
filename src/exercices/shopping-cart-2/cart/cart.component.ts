import { Component, Input, Output, EventEmitter } from '@angular/core';
import {ArticleComponent, IArticle} from "../article/article.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  standalone: true,
  imports:[ArticleComponent,CommonModule]
})
export class CartComponent {
  @Input() article!: IArticle;
  @Output() add = new EventEmitter<IArticle>();
  @Output() remove = new EventEmitter<number>();

  addArticle() {
    this.add.emit(this.article);
  }

  removeArticle() {
    this.remove.emit(this.article.id);
  }
}

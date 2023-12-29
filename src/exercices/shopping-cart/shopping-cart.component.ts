import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
  standalone: true,
  imports:[CommonModule]
})
export class ShoppingCartComponent {
  newArtName : string = ''
  newArtQty : number = 0
  listCart : any[] = []

  addToCart()
  {
    let name = this.newArtName.trim().toLowerCase()
    name = name.charAt(0).toUpperCase() + name.slice(1)
    let qty = this.newArtQty
    let dateAjout = new Date()

    let added = {
      name, qty, dateAjout
    }

    let okAjout = true

    this.listCart.forEach((item) => {

      if(item.name == name && item.qty <= 5)
      {
        okAjout = false

        let totalQty = item.qty + qty
        if(totalQty > 5) totalQty = 5

        item.qty = totalQty
        item.dateAjout = new Date()
      }
    })


    if(okAjout) this.listCart.push(added)

  }


  delArticle(nameToDelete : string) {

    this.listCart = this.listCart.filter(item => item.name != nameToDelete)
  }
}

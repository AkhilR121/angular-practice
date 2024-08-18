import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cart } from '../Cart';
import { CartItem } from '../cartItem';
import { CartService } from '../services/cart.service';
import { FoodService } from '../services/food.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  public cart!: Cart
  public cartLength: any = ''

  @Output() public childEvent = new EventEmitter()

  constructor(private cartService: CartService, private fs: FoodService) {
    this.setCart()
  }

  ngOnInit(): void {
  }


  setCart(){
    this.cart = this.cartService.getCart()
    // this.cartLength = this.cart.items.length
    // console.log(this.cartLength)
    this.cartService.cartLength = this.cart.items.length

  }
  removeFromCart(cartItem: CartItem){
    this.cartService.removeFromCart(cartItem.food.id)
    this.setCart()
  }
  changeQuantity(cartItem: CartItem, quantityInString:string){
    const quantity = Number(quantityInString)  
    this.cartService.changeQuantity(cartItem.food.id, quantity)
    this.setCart()
  }
}

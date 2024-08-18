import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from '../Cart';
import { CartItem } from '../cartItem';
import { FoodDataType } from '../food-data-type';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Cart = new Cart();
  public cartLength:any = 0


  constructor(private http: HttpClient) { }

  addToCart(food: FoodDataType): void {
    let cartItem = this.cart.items.find(item => item.food.id === food.id)    
    if(cartItem) {
      this.changeQuantity(food.id, cartItem.quantity + 1)
      return;
    }
    this.cart.items.push(new CartItem(food))
  }
  removeFromCart(foodId: number): void {
    // this.cart.items = this.cart.items.filter(item => {
    //   item.food.id != foodId
    // })
    this.cart.items.pop()
  }
  changeQuantity(foodId: number, quantity: number){
    let cartItem = this.cart.items.find(item => item.food.id === foodId)
    if(!cartItem) return;
    cartItem.quantity = quantity
  }
  getCart():Cart {
    return this.cart
  }
}

import { Injectable } from '@angular/core';
import { Cart } from '../Models/cart.model';
import { CartItem } from '../Models/cartItem.model';
import { Cloth } from '../Models/clothe.model';

@Injectable({
  providedIn: 'root',
})
export class CartServicesService {
  private cart: Cart = new Cart();

  addToCart(clothe: Cloth): void {
    let cartItem = this.cart.items.find((item) => item.cloth.id === clothe.id);
    if (cartItem) {
      this.changeQuantity(clothe.id, cartItem.quantity + 1);
      return;
    }
    this.cart.items.push(new CartItem(clothe));
  }

  removeFromCart(clotheId: number): void {
    this.cart.items = this.cart.items.filter(
      (item) => item.cloth.id != clotheId
    );
  }

  changeQuantity(quantity: number, clotheId: number) {
    let cartItem = this.cart.items.find((item) => item.cloth.id === clotheId);
    if (!cartItem) return;
    cartItem.quantity = quantity;
    return cartItem.quantity;
  }
  getCart(): Cart {
    return this.cart;
  }
}

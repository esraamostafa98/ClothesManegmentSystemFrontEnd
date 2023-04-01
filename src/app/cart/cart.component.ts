import { CartServicesService } from './../service/cart-services.service';
import { Component, OnInit } from '@angular/core';
import { Cart } from '../Models/cart.model';
import { CartItem } from '../Models/cartItem.model';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart: Cart;
  imgurl: string = '/assets/';

  constructor(private cartService: CartServicesService) {
    this.setCart();
  }

  ngOnInit(): void {}
  setCart() {
    this.cart = this.cartService.getCart();
  }
  removeFromCart(CartItem: CartItem) {
    this.cartService.removeFromCart(CartItem.cloth.id);
    this.setCart();
  }
  changeQuantity(CartItem: CartItem, quantityInString: string) {
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(quantity, CartItem.cloth.id);
    this.setCart();
  }
}

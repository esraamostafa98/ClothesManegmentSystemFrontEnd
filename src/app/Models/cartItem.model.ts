import { Cloth } from './clothe.model';
export class CartItem {
  cloth: Cloth;
  quantity: number = 1;

  constructor(cloth: Cloth) {
    this.cloth = cloth;
  }
  get price(): number {
    return this.cloth.price * this.quantity;
  }
}

import { Router } from '@angular/router';
import { CartServicesService } from './../service/cart-services.service';
import { ClothesService } from './../service/clothes.service';
import { Cloth } from './../Models/clothe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  clothes: Cloth[];
  imgurl: string = '/assets/';

  constructor(
    private clothService: ClothesService,
    private cartService: CartServicesService
  ) {}

  ngOnInit(): void {
    //this.clothes = this.clothService.getAll();
    this.clothService.getAll().subscribe({
      next: (cloth) => {
        this.clothes = cloth;
        console.log(cloth);
      },
      error: (response) => {
        console.log(response);
      },
    });
  }
  addToCart(clothe: Cloth) {
    this.cartService.addToCart(clothe);
  }
}

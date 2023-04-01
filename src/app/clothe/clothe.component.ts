import { CartServicesService } from './../service/cart-services.service';
import { ClothesService } from './../service/clothes.service';
import { Cloth } from './../Models/clothe.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-clothe',
  templateUrl: './clothe.component.html',
  styleUrls: ['./clothe.component.css'],
})
export class ClotheComponent implements OnInit {
  clothe: Cloth;
  imgurl: string = '/assets/';
  constructor(
    private activatedRoute: ActivatedRoute,
    private clotheService: ClothesService,
    private cartService: CartServicesService,
    private router: Router
  ) {
    activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        clotheService.getClothById(params['id']).subscribe({
          next: (cloth) => {
            this.clothe = cloth;

            console.log(cloth);
          },
          error: (response) => {
            console.log(response);
          },
        });
      }
    });
  }

  ngOnInit(): void {}
  addToCart() {
    this.cartService.addToCart(this.clothe);
    this.router.navigateByUrl('/cart');
  }
}

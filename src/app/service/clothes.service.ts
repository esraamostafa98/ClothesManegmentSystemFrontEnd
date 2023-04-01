import { Cloth } from './../Models/clothe.model';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClothesService {
  baseApiUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) {}
  // getClothById(id: number): Cloth {
  //   return this.getAll().find((cloth) => cloth.id == id)!;
  // }
  // getAll(): Cloth[] {
  //   return [
  //     {
  //       id: 1,
  //       price: 87,
  //       name: "Men's suit",
  //       imageUrl: '/assets/1.jpg',
  //     },
  //     {
  //       id: 2,
  //       price: 90,
  //       name: "Women's shawl",
  //       imageUrl: '/assets/2.jpg',
  //     },
  //     {
  //       id: 3,
  //       price: 122,
  //       name: "Women's black dress",
  //       imageUrl: '/assets/3.jpg',
  //     },
  //     {
  //       id: 4,
  //       price: 201,
  //       name: "Women's fleece jacket",
  //       imageUrl: '/assets/4.jpg',
  //     },
  //     {
  //       id: 5,
  //       price: 112,
  //       name: "Men's White T-shirt",
  //       imageUrl: '/assets/5.jpg',
  //     },
  //     {
  //       id: 6,
  //       price: 102,
  //       name: "Men's Shoes",
  //       imageUrl: '/assets/6.jpg',
  //     },
  //     {
  //       id: 7,
  //       price: 56,
  //       name: 'Jeans',
  //       imageUrl: '/assets/7.jpg',
  //     },
  //     {
  //       id: 8,
  //       price: 96,
  //       name: "Men's White T-shirt",
  //       imageUrl: '/assets/8.jpg',
  //     },
  //     {
  //       id: 9,
  //       price: 37,
  //       name: "Men's shirts",
  //       imageUrl: '/assets/9.jpg',
  //     },
  //   ];
  // }

  getClothById(id: number): Observable<Cloth> {
    return this.http.get<Cloth>(this.baseApiUrl + '/api/product/' + id);
  }
  getAll(): Observable<Cloth[]> {
    return this.http.get<Cloth[]>(this.baseApiUrl + '/api/product/');
  }

  AddData(formData: FormData) {
    return this.http.post<any>(this.baseApiUrl + '/api/product/', formData);
  }
  EditData(formData: FormData) {
    return this.http.put<any>(this.baseApiUrl + '/api/product/', formData);
  }
  DeleteData(id: number): Observable<Cloth> {
    return this.http.delete<Cloth>(this.baseApiUrl + '/api/product/' + id);
  }
}

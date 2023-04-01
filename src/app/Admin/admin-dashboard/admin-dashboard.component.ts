import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Cloth } from '../../Models/clothe.model';
import { ClothesService } from '../../service/clothes.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent implements OnInit {
  clothes: Cloth[];
  imgurl: string = '/assets/';
  id: number;
  constructor(private clothService: ClothesService, private router: Router) {}

  ngOnInit(): void {
    // this.clothes = this.clothService.getAll();
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
  DeleteId(id: number) {
    this.id = id;
  }
  Delete() {
    this.clothService.DeleteData(this.id).subscribe({
      next: (response) => {
        location.reload();
      },
      error: (response) => {
        console.log(response);
      },
    });
  }
}

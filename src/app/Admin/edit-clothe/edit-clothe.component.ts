import { Cloth } from './../../Models/clothe.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClothesService } from 'src/app/service/clothes.service';

@Component({
  selector: 'app-edit-clothe',
  templateUrl: './edit-clothe.component.html',
  styleUrls: ['./edit-clothe.component.css'],
})
export class EditClotheComponent implements OnInit {
  clothesForm: FormGroup;
  clothe: Cloth;
  photoChange = false;
  constructor(
    private fb: FormBuilder,
    private clothService: ClothesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.clothesForm = this.fb.group({
      id: 0,
      productName: '',
      price: 0,
      photoUrl: '',
    });

    this.route.paramMap.subscribe({
      next: (prams) => {
        const id = prams.get('id');

        if (id) {
          this.clothService.getClothById(+id).subscribe({
            next: (response) => {
              this.clothe = response;
              this.clothesForm.patchValue({
                id: this.clothe.id,
                productName: this.clothe.productName,
                price: this.clothe.price,
              });
            },
          });
        }
      },
    });
  }
  onFileSelect(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0] as File;
      this.clothesForm.get('photoUrl')?.setValue(file);
      this.photoChange = true;
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('id', this.clothesForm.get('id')?.value);
    formData.append('ProductName', this.clothesForm.get('productName')?.value);
    formData.append('Price', this.clothesForm.get('price')?.value);
    if (this.photoChange) {
      formData.append('PhotoUrl', this.clothesForm.get('photoUrl')?.value);
    }

    this.clothService.EditData(formData).subscribe({
      next: (cloth) => {
        console.log(cloth);
        this.router.navigate(['admin']);
      },
      error: (response) => {
        console.log(response);
      },
    });
  }
}

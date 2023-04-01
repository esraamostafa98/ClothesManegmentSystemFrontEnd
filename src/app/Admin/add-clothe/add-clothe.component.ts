import { Router } from '@angular/router';
import { ClothesService } from './../../service/clothes.service';

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-clothe',
  templateUrl: './add-clothe.component.html',
  styleUrls: ['./add-clothe.component.css'],
})
export class AddClotheComponent implements OnInit {
  clothesForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private clothService: ClothesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.clothesForm = this.fb.group({
      id: 0,
      productName: '',
      price: 0,
      photoUrl: '',
    });
  }

  onFileSelect(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.clothesForm.get('photoUrl')?.setValue(file);
    }
  }
  onSubmit() {
    const formData = new FormData();
    formData.append('id', this.clothesForm.get('id')?.value);
    formData.append('ProductName', this.clothesForm.get('productName')?.value);
    formData.append('Price', this.clothesForm.get('price')?.value);
    formData.append('PhotoUrl', this.clothesForm.get('photoUrl')?.value);
    this.clothService.AddData(formData).subscribe({
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

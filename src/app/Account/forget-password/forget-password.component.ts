import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css'],
})
export class ForgetPasswordComponent implements OnInit {
  forgetpasswordForm: FormGroup;
  responseData: any;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.forgetpasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }
  Forgetpassword() {
    if (this.forgetpasswordForm.valid) {
      this.authService
        .ForgetpasswordProcess(this.forgetpasswordForm.value)
        .subscribe({
          next: (user) => {
            if (user != null) {
              this.responseData = user;

              this.router.navigate(['/login']);
            }
          },

          error: (response) => {
            console.log(response);
          },
        });
    }
  }
}

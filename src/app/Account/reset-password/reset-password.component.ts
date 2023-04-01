import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
})
export class ResetPasswordComponent implements OnInit {
  resetpasswordForm: FormGroup;
  responseData: any;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.resetpasswordForm = this.fb.group({
      email: [''],
      password: ['', [Validators.required, Validators.minLength(5)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(5)]],
      token: [''],
    });
  }
  Forgetpassword() {
    if (this.resetpasswordForm.valid) {
      this.authService
        .ForgetpasswordProcess(this.resetpasswordForm.value)
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

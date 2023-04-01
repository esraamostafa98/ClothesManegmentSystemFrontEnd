import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/service/auth.service';
import { ConfirmPasswordValidator } from 'src/app/shared/customValidators';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css'],
})
export class RegisterationComponent implements OnInit {
  registerForm: FormGroup;
  responseData: any;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private cookiService: CookieService
  ) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(5)]],
        confirmPassword: ['', [Validators.required, Validators.minLength(5)]],
      },
      {
        validator: ConfirmPasswordValidator('password', 'confirmPassword'),
      }
    );
  }
  Register() {
    if (this.registerForm.valid) {
      this.authService.RegisterProcess(this.registerForm.value).subscribe({
        next: (user) => {
          if (user != null) {
            this.responseData = user;
            this.cookiService.set('user', this.responseData);
            console.log(this.cookiService.get('user'));
            this.router.navigate(['login']);
          }
        },
        error: (response) => {
          console.log(response);
        },
      });
    }
  }
}

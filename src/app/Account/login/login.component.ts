import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  responseData: any;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private cookiService: CookieService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      RememberMe: false,
    });
  }
  Login() {
    if (this.loginForm.valid) {
      this.authService.LoginProcess(this.loginForm.value).subscribe({
        next: (user) => {
          if (user != null) {
            this.responseData = user;
            this.cookiService.set('user', this.responseData);
            console.log(this.cookiService.get('user'));

            this.router.navigate(['']);
          }
        },

        error: (response) => {
          console.log(response);
        },
      });
    }
  }
}

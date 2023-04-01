import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseApiUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient, private cookei: CookieService) {}

  LoginProcess(user: any) {
    return this.http.post(this.baseApiUrl + '/api/account/login', user);
  }
  IsLogIn() {
    return !!this.cookei.get('user');
  }
  Logout() {
    return this.cookei.delete('user');
  }

  RegisterProcess(user: any) {
    debugger;
    return this.http.post(this.baseApiUrl + '/api/account/registeration', user);
  }
  ForgetpasswordProcess(user: any) {
    return this.http.post(
      this.baseApiUrl + '/api/account/forgetpassword',
      user
    );
  }
  ResetProcessGet(user: any) {
    return this.http.get(this.baseApiUrl + '/api/account/resetpassword', user);
  }
  ResetpasswordProcess(user: any) {
    return this.http.post(this.baseApiUrl + '/api/account/resetpassword', user);
  }
}

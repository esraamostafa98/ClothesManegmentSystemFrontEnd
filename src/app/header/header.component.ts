import { AuthService } from 'src/app/service/auth.service';
import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnChanges {
  isLogin: boolean;
  constructor(private auth: AuthService) {}
  ngOnChanges() {
    this.isLogin = this.auth.IsLogIn();
  }
  ngOnInit(): void {
    this.isLogin = this.auth.IsLogIn();
  }
  logout() {
    this.auth.Logout();
    location.reload();
  }
}

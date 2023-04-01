import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ClotheComponent } from './clothe/clothe.component';
import { CartComponent } from './cart/cart.component';
import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';
import { AddClotheComponent } from './Admin/add-clothe/add-clothe.component';
import { EditClotheComponent } from './Admin/edit-clothe/edit-clothe.component';
import { DeleteClotheComponent } from './Admin/delete-clothe/delete-clothe.component';
import { RegisterationComponent } from './Account/registeration/registeration.component';
import { LoginComponent } from './Account/login/login.component';
import { ForgetPasswordComponent } from './Account/forget-password/forget-password.component';
import { ResetPasswordComponent } from './Account/reset-password/reset-password.component';
import { CookieService } from 'ngx-cookie-service';

import { AuthGuard } from './shared/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ClotheComponent,
    CartComponent,
    AdminDashboardComponent,
    AddClotheComponent,
    EditClotheComponent,
    DeleteClotheComponent,
    RegisterationComponent,
    LoginComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatIconModule,
    AppRoutingModule,
  ],
  providers: [AuthGuard, CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {}

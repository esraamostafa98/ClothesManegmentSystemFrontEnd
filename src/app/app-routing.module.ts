import { ForgetPasswordComponent } from './Account/forget-password/forget-password.component';
import { RegisterationComponent } from './Account/registeration/registeration.component';
import { LoginComponent } from './Account/login/login.component';
import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';
import { CartComponent } from './cart/cart.component';
import { ClotheComponent } from './clothe/clothe.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClotheComponent } from './Admin/add-clothe/add-clothe.component';
import { EditClotheComponent } from './Admin/edit-clothe/edit-clothe.component';
import { DeleteClotheComponent } from './Admin/delete-clothe/delete-clothe.component';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'admin',
    component: AdminDashboardComponent,
    canActivate: [AuthGuard],
  },
  { path: 'add', component: AddClotheComponent },
  { path: 'edit/:id', component: EditClotheComponent },
  { path: 'delete', component: DeleteClotheComponent },
  { path: 'clothe/:id', component: ClotheComponent },
  { path: 'cart', component: CartComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterationComponent },
  { path: 'forgetpassword', component: ForgetPasswordComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

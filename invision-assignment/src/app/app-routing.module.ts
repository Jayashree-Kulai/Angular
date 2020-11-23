import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { LoginAuthGuard } from './auth/login-auth.guard';
import { ChangePasswordComponent } from './change-password/change-password.component';

const routes: Routes = [
  {
    path : '',
    redirectTo : '/login',
    pathMatch : 'full'
  },
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path : 'homescreen',
    component : HomeScreenComponent,
    canActivate: [LoginAuthGuard],
  },
  {
    path : 'changepassword',
    component : ChangePasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

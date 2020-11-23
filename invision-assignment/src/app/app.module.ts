
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { LoginAuthGuard } from './auth/login-auth.guard';
import { LoginService } from './services/login.service';
import { ChangePasswordComponent } from './change-password/change-password.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    ForgotPasswordComponent,
    HomeScreenComponent,
    ChangePasswordComponent,
  ],
  entryComponents: [ForgotPasswordComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule

  ],
  providers: [LoginAuthGuard, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }

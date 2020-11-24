import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 

  constructor(public dialog : MatDialog, public loginService : LoginService) { }

  ngOnInit(): void {
  }

  

  openDialog() {
    this.dialog.open(ForgotPasswordComponent);
  }

  
}

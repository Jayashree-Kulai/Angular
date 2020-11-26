import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  constructor(public service : LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  checkpassword() {
    console.log("change password...", this.service.changepassword)
    if (this.service.changepassword.value.newPassword == this.service.changepassword.value.reEnterPassword) {
      alert("Success!!");
    } else {
      alert("Can't change!!");
      this.router.navigate(['change-password'])
    }
  }

}

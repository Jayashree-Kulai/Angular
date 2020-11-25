import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  form : FormGroup = new FormGroup({
    username : new FormControl(''),
    password : new FormControl(''),
  })

  changepassword: FormGroup = new FormGroup({
    newPassword: new FormControl('',[Validators.required]),
    reEnterPassword: new FormControl('',[Validators.required])
  });
  
  isCredentials() : boolean {
    // if(this.form.value.username == "11" && this.form.value.password == "11") {
      return true;
    // }
  }

  
}

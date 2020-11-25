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
  
  isCredentials() : boolean {
    // if(this.form.value.username == "11" && this.form.value.password == "11") {
      return true;
    // }
    
  }
}

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
    if(this.form.value.username == "Jayashree" && this.form.value.password == "Jayashree") {
      return true;
    }
    
  }
}

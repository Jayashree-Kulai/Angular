import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class HomeScreenService {

  constructor() { }

   form : FormGroup = new FormGroup({
    $key : new FormControl(null),
    title : new FormControl(''),
    description : new FormControl(''),
    buttonTitle : new FormControl(''),
    buttonText : new FormControl(''),
    checkBoxText : new FormControl(''),
    startDate : new FormControl(''),
    endDate : new FormControl(''),
    autoRemainder : new FormControl(''),
    pptFile : new FormControl(''),
    xlSheet : new FormControl(''),
    mailBody : new FormControl(''),

  });

}

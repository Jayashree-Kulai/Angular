import { Injectable } from '@angular/core';
import { Phone } from '../components/phone-list/phone';
import { PHONES } from '../components/phone-list/mockphonelist';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  constructor() { }
  
  getAllPhones() : Phone[] {
    return PHONES;
  }

  getPhone(phoneid : string) : Phone {
    return PHONES.find(phone => phone.id === phoneid)
  }
}

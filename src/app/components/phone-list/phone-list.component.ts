import { Component, OnInit } from '@angular/core';
import { Phone } from './phone';
import { PHONES } from './mockphonelist'

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.scss']
})
export class PhoneListComponent implements OnInit {
 
  phone: Phone = {
    price: 0,
    name: '',
    os: '',
    imageUrl: ''
  }
  
  phoneList = PHONES;

  constructor() { }

  ngOnInit(): void {
  }

  createLogo(os) {
    return `../assets/${os}.png`;
  }

  save() {
    const tempPhone: Phone = { ...this.phone }
    this.phoneList.unshift(tempPhone)
  }

  delete(phone: Phone) {
    this.phoneList.forEach((item, index) => {
      if (item === phone) {
        this.phoneList.splice(index, 1)
      }
    })
  }
}

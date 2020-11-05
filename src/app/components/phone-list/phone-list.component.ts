import { Component, OnInit } from '@angular/core';
import { Phone } from './phone';
import { PhoneService } from 'src/app/service/phone.service';

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
    imageUrl: '',
    id : ''
  }
  
  phoneList : Phone[];

  constructor(private phoneservice : PhoneService ) { }

  ngOnInit(): void {
    this.loadPhones();
  }

  createLogo(os) {
    return `../assets/${os}.png`;
  }

  save() {
    const tempPhone: Phone = { ...this.phone }
    this.phone.id = this.RandomString();
    this.phoneList.unshift(tempPhone)
  }

  delete(phone: Phone) {
    this.phoneList.forEach((item, index) => {
      if (item === phone) {
        this.phoneList.splice(index, 1)
      }
    })
  }

  RandomString() : string{
    return Math.floor(Math.random() * Math.floor(30000)).toString();
  }

  loadPhones() : void {
    this.phoneList = this.phoneservice.getAllPhones();
  }
}

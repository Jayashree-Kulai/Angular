import { Component, OnInit } from '@angular/core';
import { Phone } from './phone'

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.scss']
})
export class PhoneListComponent implements OnInit {
 
  counter = 0
  phone: Phone = {
    price: 100,
    name: 'iPhone',
    os: 'ios',
    imageUrl: 'https://picsum.photos/300/300',
    RAM : "16GB"
  }
  constructor() { }
  ngOnInit(): void {
  }
  increment() {
    this.counter++
  }
}

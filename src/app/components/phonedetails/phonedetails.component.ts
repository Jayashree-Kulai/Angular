import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Phone } from '../phone-list/phone';
import { PhoneService } from 'src/app/service/phone.service';

@Component({
  selector: 'app-phonedetails',
  templateUrl: './phonedetails.component.html',
  styleUrls: ['./phonedetails.component.scss']
})
export class PhonedetailsComponent implements OnInit {

  phone : Phone;

  constructor( private phoneService : PhoneService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadPhone();
  }

  loadPhone() : void {
    const id = this.activatedRoute.snapshot.paramMap.get('phoneid');
    this.phone = this.phoneService.getPhone(id);
  }

}

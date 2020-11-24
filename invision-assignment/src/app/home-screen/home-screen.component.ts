import { Component, OnInit } from '@angular/core';
import { HomeScreenService } from './../services/home-screen.service'

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})
export class HomeScreenComponent implements OnInit {

  constructor(public service : HomeScreenService) { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { HomeScreenService } from './../services/home-screen.service'
import { MatDialog } from '@angular/material/dialog';
import { OptionsComponent } from '../options/options.component';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})
export class HomeScreenComponent implements OnInit {

  constructor(public service : HomeScreenService, public dialog : MatDialog,) { }

  ngOnInit(): void {
  }

  openDialog(){
    this.dialog.open(OptionsComponent ,{
      //height: '100vw',
      //width: '100vw',
      //maxWidth: '100vw',
      panelClass: 'backdropBackground'
    });
  }

}

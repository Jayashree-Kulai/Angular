import { Component, OnInit } from '@angular/core';
import { HomeScreenService } from './../services/home-screen.service'
import { MatDialog } from '@angular/material/dialog';
import { OptionsComponent } from '../options/options.component';
import { AdminComponent } from '../admin/admin.component';
import { SuperAdminComponent } from '../super-admin/super-admin.component';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})
export class HomeScreenComponent implements OnInit {

  constructor(public service : HomeScreenService, public dialog : MatDialog,) { }
  closeIcon = "add";
  overlay = true;
  openOverlay = () => {
    this.overlay = !this.overlay;
    this.closeIcon = this.closeIcon === "add" ? "close" : "add";
  }

  ngOnInit(): void {
  }

  openDialog(){
    this.dialog.open(OptionsComponent ,{
      panelClass: 'backdropBackground'
    });
  }
  openAdminDialog() {
    this.dialog.open(AdminComponent);
  }

  openSuperAdminDialog() {
    this.dialog.open(SuperAdminComponent);
  }


}
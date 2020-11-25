import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChangePasswordComponent } from '../change-password/change-password.component';
import { AdminComponent } from '../admin/admin.component';
import { SuperAdminComponent } from '../super-admin/super-admin.component';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit {

  constructor(public dialog : MatDialog) { }

  ngOnInit(): void {
  }
  openDialog() {
    this.dialog.open(ChangePasswordComponent);
  }

  openAdminDialog() {
    this.dialog.open(AdminComponent);
  }

  openSuperAdminDialog() {
    this.dialog.open(SuperAdminComponent);
  }

  closeDialog() {
    this.dialog.closeAll();
  }
}

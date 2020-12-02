import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SuperAdmin } from '../interfaces/superAdminList';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-super-admin',
  templateUrl: './super-admin.component.html',
  styleUrls: ['./super-admin.component.scss']
})
export class SuperAdminComponent implements OnInit {
  super: SuperAdmin = {
    name: '',
    id: '',
    mail: ''
  };

  superAdmin: SuperAdmin[];
  constructor(public dialog: MatDialog, private service: AdminService) { }

  ngOnInit(): void {
    this.getAllSuperAdmin();
  }

  closeDialog() {
    this.dialog.closeAll();
  }

  getAllSuperAdmin(): void {
    this.superAdmin = this.service.getAllSuperAdmin();
    console.log("all super admin", this.superAdmin)
  }
  save(): void {
    const TempPhone: SuperAdmin = { ...this.super };
    this.superAdmin.unshift(TempPhone)
  };

  delete(spr: SuperAdmin): void {
    this.superAdmin.forEach((item, index) => {
      if (item === spr) {
        this.superAdmin.splice(index, 1)
      }
    })
  }
}

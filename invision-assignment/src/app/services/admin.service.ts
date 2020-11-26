import { Injectable } from '@angular/core';
import { SuperAdmin}  from '../interfaces/superAdminList'
import { SUPERADMIN } from '../super-admin/mockList';
import { Admin}  from '../interfaces/adminList';
import { ADMIN } from '../admin/mockList';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor() { }

  getAllSuperAdmin() : SuperAdmin[] {
    return SUPERADMIN;
  }
  getAllAdmin() : Admin[] {
    return ADMIN;
  }
}

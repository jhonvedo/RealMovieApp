import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RoleFormComponent } from './role-form/role-form.component';
import { UserFormComponent } from './user-form/user-form.component';
import { IdentityRole } from '../models/identity-role';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {

  constructor(public dialog: MatDialog) {}
  modalZise:string = '250px';
  roleEdit:IdentityRole;
  ngOnInit(): void {
  }

  newRole(){
    this.roleEdit = null;
    this.openRoleModal();
  }

  newUser(){
    const dialogRef = this.dialog.open(UserFormComponent, {width: this.modalZise});
  }

  onRoleEdit(event:IdentityRole){   
    console.log(event);
    this.roleEdit = event;
    this.openRoleModal();
  }

  openRoleModal(){
    const dialogRef = this.dialog.open(RoleFormComponent, {width: this.modalZise,data:this.roleEdit});
  }

}

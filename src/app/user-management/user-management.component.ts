import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserFormComponent } from './user-form/user-form.component';
import { IdentityUser } from '../models/identity-user';


@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {

  constructor(public dialog: MatDialog) {}
  modalZise:string = '350px';
  updateUser:IdentityUser;
  ngOnInit(): void {
  }
 
  newUser(){
   this.updateUser=null;
   this.openUserModal();
  }

  onEditUser(data:IdentityUser){
    this.updateUser=data;
    this.openUserModal();
  }
  openUserModal(){
    const dialogRef = this.dialog.open(UserFormComponent, {width: this.modalZise,data:this.updateUser});
  }
}

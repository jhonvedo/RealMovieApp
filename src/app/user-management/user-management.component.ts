import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserFormComponent } from './user-form/user-form.component';
import { IdentityUser } from '../models/identity-user';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../services/auth.service';
import { IdentityUserService } from '../services/identity-user.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {

  constructor(public dialog: MatDialog,
    private notificationService: ToastrService,
    private service:IdentityUserService   ) {}

  users:IdentityUser[]=[];
  modalZise:string = '350px';
  updateUser:IdentityUser;
  ngOnInit(): void {
    this.loadUsers();
  }
  loadUsers() {
    this.service.get().subscribe(
      (success)=>{
        this.users = success;        
      },
      (error)=>{
        this.notificationService.error(error,"Error");    
        console.error(error);     
      }
    )
  }
 
  newUser(){
   this.updateUser=null;
   this.openUserModal();
  }

  onEditUser(data:IdentityUser){
    this.updateUser=data;
    this.openUserModal();
  }
  onDeleteUser(data:IdentityUser){
    this.service.delete(data).subscribe(
      (success)=>{
        this.notificationService.success("Deleted corrency");   
        this.loadUsers();   
      },
      (error)=>{
        this.notificationService.error(error,"Error");    
        console.error(error);     
      }
    );
  }
  openUserModal(){
    const dialogRef = this.dialog.open(UserFormComponent, {width: this.modalZise,data:this.updateUser});
    dialogRef.afterClosed().subscribe(result => {
      if(result && result.success){
        this.loadUsers();  
      }
    });
  }
}

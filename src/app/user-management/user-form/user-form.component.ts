import { Component, OnInit, Inject } from '@angular/core';
import { IdentityUser } from 'src/app/models/identity-user';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IdentityUserService } from 'src/app/services/identity-user.service';
import { IdentityRoleService } from 'src/app/services/identity-role.service';
import { IdentityRole } from 'src/app/models/identity-role';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  model:IdentityUser=new IdentityUser();
  roles:IdentityRole[]=[];
  isNew:boolean=true;
  password:string;
  rolId:string;
  hide = true;

  constructor(private service:IdentityUserService,
    private roleService:IdentityRoleService,
    public dialogRef: MatDialogRef<UserFormComponent>,
    @Inject(MAT_DIALOG_DATA) data) { 
      roleService.get().subscribe(
        (data)=>{this.roles=data}
      );     
    if(data!=null){
      this.model = {...data};
      this.isNew = false;
    }    
  }  

  ngOnInit(): void {
  }

  onSave(){
    this.model.userName = this.model.email;
    this.service.post(this.model,this.password,this.rolId).subscribe(
      (success)=>{
        console.log(success);
        this.dialogRef.close();
      },
      (error)=>{

      }
    );
  }
  onUpdate(){
    this.model.userName = this.model.email;
    this.service.put(this.model).subscribe(
      (success)=>{
        console.log(success);
        this.dialogRef.close();
      },
      (error)=>{

      }
    );
  }

}

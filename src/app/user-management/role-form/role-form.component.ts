import { Component, OnInit, Input, Inject } from '@angular/core';
import { IdentityRole } from 'src/app/models/identity-role';
import { IdentityRoleService } from 'src/app/services/identity-role.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-role-form',
  templateUrl: './role-form.component.html',
  styleUrls: ['./role-form.component.scss']
})
export class RoleFormComponent implements OnInit {

  model:IdentityRole=new IdentityRole();
  isNew:boolean=true;

  constructor(private service:IdentityRoleService,
    public dialogRef: MatDialogRef<RoleFormComponent>,
    @Inject(MAT_DIALOG_DATA) data) { 
      console.log(data);
    if(data!=null){
      this.model = {...data};
      this.isNew = false;
    }    
  }  

  ngOnInit(): void {
  }

  onSave(){
    this.service.post(this.model).subscribe(
      (success)=>{
        console.log(success);
        this.dialogRef.close();
      },
      (error)=>{

      }
    );
  }
  onUpdate(){
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

import { Component, OnInit, Input } from '@angular/core';
import { IdentityRole } from 'src/app/models/identity-role';
import { IdentityRoleService } from 'src/app/services/identity-role.service';

@Component({
  selector: 'app-role-form',
  templateUrl: './role-form.component.html',
  styleUrls: ['./role-form.component.scss']
})
export class RoleFormComponent implements OnInit {
  @Input() bankName:IdentityRole;
  model:IdentityRole=new IdentityRole();
  isNew:boolean=true;
  constructor(private service:IdentityRoleService) { 
    if(this.bankName!=null){
      this.model = {...this.bankName};
    }    
  }  

  ngOnInit(): void {
  }

  onSave(){
    this.service.post(this.model).subscribe(
      (success)=>{
        console.log(success);
      },
      (error)=>{

      }
    );
  }
  onUpdate(){
    this.service.put(this.model).subscribe(
      (success)=>{
        console.log(success);
      },
      (error)=>{

      }
    );
  }

}

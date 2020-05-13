import { Component, OnInit } from '@angular/core';
import { IdentityRole } from 'src/app/models/identity-role';
import { IdentityRoleService } from 'src/app/services/identity-role.service';

@Component({
  selector: 'app-role-form',
  templateUrl: './role-form.component.html',
  styleUrls: ['./role-form.component.scss']
})
export class RoleFormComponent implements OnInit {

  constructor(private service:IdentityRoleService) { }
  model:IdentityRole=new IdentityRole();

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

}

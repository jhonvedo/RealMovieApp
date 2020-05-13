import { Component, OnInit } from '@angular/core';
import { IdentityRoleService } from 'src/app/services/identity-role.service';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.scss']
})
export class RoleListComponent implements OnInit {

  constructor(private service:IdentityRoleService ) { }

  ngOnInit(): void {
    this.service.get().subscribe(
      (data)=>{
        console.log(data)
      },
      err=>{}
    )
  }

}

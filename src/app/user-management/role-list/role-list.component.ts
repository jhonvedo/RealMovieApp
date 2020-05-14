import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IdentityRoleService } from 'src/app/services/identity-role.service';
import { IdentityRole } from 'src/app/models/identity-role';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.scss']
})
export class RoleListComponent implements OnInit {
  @Output() onEdit = new EventEmitter<IdentityRole>();
  roles:IdentityRole[]=[];
  constructor(private service:IdentityRoleService ) { }

  displayedColumns: string[] = ['name','actions'];

  ngOnInit(): void {
    this.service.get().subscribe(
      (data)=>{
        this.roles = data;
        console.log(data)
      },
      err=>{}
    )
  }

  edit(item:IdentityRole){
    this.onEdit.emit(item);
  }

}

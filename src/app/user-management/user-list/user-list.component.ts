import { Component, OnInit, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { IdentityUser } from 'src/app/models/identity-user';
import { IdentityUserService } from 'src/app/services/identity-user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']

})
export class UserListComponent implements OnInit {
  @Output() onEdit = new EventEmitter<IdentityUser>();
  users:IdentityUser[]=[];
  constructor(private service:IdentityUserService ) { }

  displayedColumns: string[] = ['firstName','lastName','email','isAdmin','actions'];

  ngOnInit(): void {
    this.service.get().subscribe(
      (data)=>{
        this.users = data;       
      },
      err=>{}
    )
  }

  edit(item:IdentityUser){
    this.onEdit.emit(item);
  }

}

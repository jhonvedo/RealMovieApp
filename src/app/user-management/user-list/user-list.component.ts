import { Component, OnInit, EventEmitter, Output, ViewEncapsulation, Input,AfterContentInit } from '@angular/core';
import { IdentityUser } from 'src/app/models/identity-user';
import { IdentityUserService } from 'src/app/services/identity-user.service';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']

})
export class UserListComponent implements OnInit,AfterContentInit {
  @Input() users:IdentityUser[]=[];
  @Output() onEdit = new EventEmitter<IdentityUser>();
  @Output() onDelete = new EventEmitter<IdentityUser>();
  currentUser:IdentityUser;

  constructor(private authService:AuthService) {  

  }
  ngAfterContentInit(): void {
    this.authService.user.subscribe(data=>{
      this.currentUser = data;
    })
  }

  displayedColumns: string[] = ['firstName','lastName','email','isAdmin','actions'];

  ngOnInit(): void {
 
  }

  edit(item:IdentityUser){
    this.onEdit.emit(item);
  }

  delete(item:IdentityUser){
    var r = confirm("Are you sure?");
    if (r == true) {
      this.onDelete.emit(item);    
    }     
  }

}

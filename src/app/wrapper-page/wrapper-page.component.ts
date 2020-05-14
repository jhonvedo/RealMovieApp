import { Component,AfterContentInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { IdentityUser } from '../models/identity-user';

@Component({
  selector: 'app-wrapper-page',
  templateUrl: './wrapper-page.component.html',
  styleUrls: ['./wrapper-page.component.scss']
})
export class WrapperPageComponent implements AfterContentInit {

  
  user:IdentityUser;
  constructor(private breakpointObserver: BreakpointObserver,private authService:AuthService) {
    
  }
  ngAfterContentInit(): void {
    this.authService.user.subscribe(data=>{
      if(data){
        this.user = data;
      }
    });
  }

  

  onSignout(){
    this.authService.logout();
  }

}

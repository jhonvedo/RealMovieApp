import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public authService: AuthService, public router: Router) {}

  async canActivate(route: ActivatedRouteSnapshot) {
    if (!await this.authService.checkAuthenticated()) {
      await this.router.navigate(['login']);
      return false;
    } 
  
    if(route.routeConfig.path == "users" && !this.authService.user?.value?.isAdmin){
      await this.router.navigate(['home']);
     return false; 
    }
    
    return true;
  }
}

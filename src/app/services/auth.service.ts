import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthClientService } from './auth-client.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService { 
 
  public isAuthenticated = new BehaviorSubject<boolean>(false);
  public isAdmin = new BehaviorSubject<boolean>(false);

  constructor(private router: Router,private authClient:AuthClientService) {
  }

  checkAuthenticated() {   
    const authenticated = this.authClient.sessionExists();  
    this.isAuthenticated.next(authenticated);
    return authenticated;
  }

  async login(username: string, password: string) {

    const transaction = await this.authClient.signIn(username, password);

    if (!transaction.success) {
      throw Error('We cannot handle the ' + transaction.detail + ' status');
    }
    this.isAuthenticated.next(true);
    this.isAdmin.next(transaction.detail.isAdmin);
  }

   logout() {
    try {
      this.authClient.signOut();
      this.isAuthenticated.next(false);
      this.router.navigate(["login"]);
    } catch (err) {
      console.error(err);
    }
  }
}

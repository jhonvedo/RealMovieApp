import { Component, ViewEncapsulation } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']

})
export class AppComponent {
  isAutenticate: boolean;

  /**
   *
   */
  constructor(private authService: AuthService) {
    authService.isAuthenticated.subscribe(value => {
      this.isAutenticate = value;
    })
  }


}

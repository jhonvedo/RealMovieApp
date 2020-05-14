import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable()
export class CustomInterceptor implements HttpInterceptor {
  constructor(public authService: AuthService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    var user = this.authService.user.value;
    if(user){
        request = request.clone({
            setHeaders: {
              "UserId": user.id,
              "UserName": user.userName
            }
          });
    }
    
    return next.handle(request);
  }
}
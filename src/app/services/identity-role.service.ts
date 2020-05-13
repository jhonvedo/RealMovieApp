import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IdentityRole } from '../models/identity-role';

@Injectable({
  providedIn: 'root'
})
export class IdentityRoleService {
  path:string = "role";
  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<IdentityRole[]>(`${environment.baseUrl}${this.path}`);
  }
  post(data:IdentityRole) {
    return this.http.post(`${environment.baseUrl}${this.path}`,data);
  }
  put(data:IdentityRole) {
    return this.http.put(`${environment.baseUrl}${this.path}`,data);
  }
  delete(data:IdentityRole) {
    return this.http.delete(`${environment.baseUrl}${this.path}/${data.id}`);
  }
}

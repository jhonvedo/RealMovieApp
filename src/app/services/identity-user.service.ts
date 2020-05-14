import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IdentityUser } from '../models/identity-user';

@Injectable({
  providedIn: 'root'
})
export class IdentityUserService {

  path:string = "user";
  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<IdentityUser[]>(`${environment.baseUrl}${this.path}`);
  }
  post(data:IdentityUser) {

    return this.http.post(`${environment.baseUrl}${this.path}`,data);
  }
  put(data:IdentityUser) {
    return this.http.put(`${environment.baseUrl}${this.path}`,data);
  }
  delete(data:IdentityUser) {
    return this.http.delete(`${environment.baseUrl}${this.path}/${data.id}`);
  }
}

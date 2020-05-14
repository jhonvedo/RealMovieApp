import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Show } from '../models/show';
import { environment } from 'src/environments/environment';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class ShowService {

  path:string = "show";
  constructor(private http: HttpClient) { }

 

  httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'application/json',
      'Cache-Control': 'no-cache'
    })    
  };

  get() {
    return this.http.get<Show[]>(`${environment.baseUrl}${this.path}`,this.httpOptions);
     
  }

  getOne(id:string) {
    return this.http.get<Show>(`${environment.baseUrl}${this.path}/${id}`,this.httpOptions)
  }




}

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

  cache:Show[]=[];
  lastUpdate:Date= new Date();
  httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'application/json',
      'Cache-Control': 'no-cache'
    })    
  };

  get() {
    return new Promise<Show[]>((resolve, reject) => {
      if(this.cache.length > 0){
        resolve(this.cache);     
      }else{
        this.http.get<Show[]>(`${environment.baseUrl}${this.path}`,this.httpOptions).subscribe(
          (data)=>{
            this.cache = data;
            resolve(this.cache);     
          },
          (error)=>{
            reject(error);
          }
        );
      }
    });    
  }

  getOne(id:string) {
    return this.http.get<Show>(`${environment.baseUrl}${this.path}/${id}`,this.httpOptions)
  }




}

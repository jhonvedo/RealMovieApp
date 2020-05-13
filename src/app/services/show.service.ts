import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Show } from '../models/show';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShowService {

  path:string = "show";
  constructor(private http: HttpClient) { }

  cache:Show[]=[];
  lastUpdate:Date= new Date();

  get() {
    return new Promise<Show[]>((resolve, reject) => {
      if(this.cache.length > 0){
        resolve(this.cache);     
      }else{
        this.http.get<Show[]>(`${environment.baseUrl}${this.path}`).subscribe(
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



}

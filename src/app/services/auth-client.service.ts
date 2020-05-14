import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IdentityUser } from '../models/identity-user';

@Injectable({
  providedIn: 'root'
})
export class AuthClientService {
 
 
  itemKey="9d801c4cb127a18c1db76a26448d5510";
  path:string = "auth";
  constructor(private http: HttpClient) { }


  signIn(user:string,password:string):Promise<{success:boolean,detail:any}>{
    var options={
      headers:new HttpHeaders({
        'username': user,
        'password': password
      })
    };
    return new Promise((resolve,_)=>{
      this.http.post(`${environment.baseUrl}${this.path}/signin`,null,options).subscribe(
        (data:IdentityUser)=>{
          localStorage.setItem(this.itemKey,window.btoa(JSON.stringify(data)));
          resolve({success:true,detail:{isAdmin:data.isAdmin}});
        },
        (error)=>{
          resolve({success:false,detail:error});
        }        

      );


    });
  }

  sessionExists():boolean {
    var data = localStorage.getItem(this.itemKey);
    if(data==undefined){
      return false;
    }
    var model:IdentityUser = JSON.parse(window.atob(data));
    if(model.email==undefined || model.id == undefined){
      return false;
    }
    return true;
  }

  signOut() {
    localStorage.removeItem(this.itemKey);
  }
}

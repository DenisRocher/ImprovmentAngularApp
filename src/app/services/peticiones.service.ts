import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class PeticionesService {
  public url: string;
  constructor(
    public _httpClient: HttpClient)
  { 
    this.url = 'https://reqres.in/'
  }

  getUser(userId:any): Observable<any> {
    return this._httpClient.get(this.url + 'api/users/'+userId)
  }
  

  addUser(user: any): Observable<any> {
    let jsonUser = JSON.stringify(user);
    let headers = new HttpHeaders().set('Content-Type', 'application');
    console.log(jsonUser);
    return this._httpClient.post(this.url + 'api/users/', jsonUser,{headers: headers});
  }
  
}


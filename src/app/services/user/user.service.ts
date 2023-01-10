import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl: string = "http://localhost:7000/";

  constructor(
    private http: HttpClient
  ) { }

  addUser(params: any): Observable<any> {
    return this.http.post(this.baseUrl + 'addUser', params)
  }

  getUser(): Observable<any> {
    return this.http.get(this.baseUrl + 'getAllUser').pipe(map((res: any) => {
       console.log("api res++++",res)
      return res
    }))
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  getUser(){
    return this.http.get('http://localhost:3000/users/getUser');
  }

  // tslint:disable-next-line: no-trailing-whitespace

  deleteUser(id){
    return this.http.get('http://localhost:3000/users/deleteUser/'+id);
  }

  insertUser(data){
    return this.http.post('http://localhost:3000/users/insertUser',data);
  }

  updateUser(data){
    return this.http.post('http://localhost:3000/users/updateUser',data);
  }


}

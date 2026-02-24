import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

//users = ["Sai", "Ravi", "Anu"];

  // getUsers() {
  //   return this.users;
  // }

  // addUser(name: string) {
  //   this.users.push(name);
  // }

  // deleteUser(index: number) {
  //   this.users.splice(index, 1);
  // }


  // constructor() { }



constructor(private http: HttpClient) {}

getUsers() {
  return this.http.get<any[]>('http://localhost:3000/users');
}

addUser(user: any) {
  return this.http.post('http://localhost:3000/users', user);
}

deleteUser(id: number) {
  return this.http.delete(`http://localhost:3000/users/${id}`);
}






}

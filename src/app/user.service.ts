import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

users = ["Sai", "Ravi", "Anu"];

  getUsers() {
    return this.users;
  }

  addUser(name: string) {
    this.users.push(name);
  }

  deleteUser(index: number) {
    this.users.splice(index, 1);
  }


  constructor() { }
}

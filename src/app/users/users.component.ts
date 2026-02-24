import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  imports: [CommonModule,FormsModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  constructor(private userService: UserService) {}
users: string[] = [];
newUser = "";

 ngOnInit() {
    this.users = this.userService.getUsers();
  }

 addUser() {
    this.userService.addUser(this.newUser);
    this.newUser = "";
  }


   deleteUser(i: number) {
    this.userService.deleteUser(i);
  }

// addUser() {
//   if (this.newUser) {
//     this.users.push(this.newUser);
//     this.newUser = "";
//   }
// }

// deleteUser(index: number) {
//   this.users.splice(index, 1);
// }


}

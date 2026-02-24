import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-users',
  imports: [CommonModule,FormsModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
users = ["Sai", "Ravi", "Anu"];

newUser = "";

addUser() {
  if (this.newUser) {
    this.users.push(this.newUser);
    this.newUser = "";
  }
}

}

import { Component, OnInit } from '@angular/core';

import { I_User, I_Example3Component } from './model/UserModel';
import { UserServiceService } from './services/user-service.service';

@Component({
  selector: 'app-example3',
  templateUrl: './example3.component.html',
  styleUrls: ['./example3.component.css'],
})
export class Example3Component implements OnInit, I_Example3Component {
  public title: string = 'Example of Working with an API';
  public UserListNew!: I_User[];

  constructor(private userService: UserServiceService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((serverUsers: I_User[]) => {
      // console.log('Result:', users123);
      this.UserListNew = serverUsers;
    });
  }

  removeUser(id: number): void {
    // console.log(`Delete Button Working`)
    this.userService.removeUserService(id).subscribe(() => {
      this.UserListNew = this.UserListNew.filter((user) => user.id !== id);
    });
  }

  onSubmit(data: I_User): void {
    // e.preventDefault()
    // data.id = this.UserListNew.length + 1;
    // console.log(data);
    this.userService.addUserService(data).subscribe((newUser) => {
      // console.log(newUser);
      this.UserListNew.push(newUser);
    });
    // console.log(this.UserList)
  }
}

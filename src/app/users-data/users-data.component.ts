import { Component, OnInit } from '@angular/core';
import { IUser } from '../models/IUser';

@Component({
  selector: 'app-users-data',
  templateUrl: './users-data.component.html',
  styleUrls: ['./users-data.component.css']
})
export class UsersDataComponent implements OnInit {

  users: IUser[] = [
    { id: 1, name: 'nandang' },
    { id: 2, name: 'ayu' },
    { id: 3, name: 'kazu' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

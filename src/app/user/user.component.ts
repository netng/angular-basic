import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  showContent: boolean = true;
  userCreated: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onButtonClick() {
    this.userCreated = true;
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {
  backgroundColor: string = 'black';
  textColor: string = 'white';
  buttonClasses = {
    'btn-primary': true,
    'btn-warning': false
  }

  constructor() { }

  ngOnInit(): void {
  }

  onButtonClick () {
    this.buttonClasses['btn-primary'] = false;
    this.buttonClasses['btn-warning'] = true;
    this.backgroundColor = 'green';
    this.textColor = 'red';
  }

  applyChanges() {
    return this.buttonClasses;
  }

}

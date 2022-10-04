import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  name: string = 'nandang'; 
  buttonDisabled: boolean = true;
  buttonText: string = "enable";

  constructor() { }

  ngOnInit(): void {
  }

  onButtonClick() {
    this.buttonDisabled = !this.buttonDisabled;

    switch(this.buttonDisabled) {
      case true:
        this.buttonText = 'enable';
        break;
      default:
        this.buttonText = 'disable';
        break;

    }
  }

}

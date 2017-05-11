import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styles: [`
    p {
      margin-top: 20px;
    }
      #userInputText {
        color: purple;
      }
      #intro {
        text-align: center;
      }
  `]
})
export class TwoWayBindingComponent implements OnInit {

  intro:string = "World";
  name:string = undefined;

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'child-component',
  template: `
  <div class="container">

    <p>Hello, my name is <span>{{ name }}</span>!</p>

    <paper-button raised (click)="fireButtonClick($event)">Toggle</paper-button>

  </div>
  `,
  styles: [`
    .container {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      padding: 25px 0 10px 0;
    }

    span {
      color: purple;
    }

    paper-button {
      margin-top: 25px;
    }

  `]
})
export class ChildComponent implements OnInit {

  //Child component uses the Input() decorator to get properties passed as property bindings from parent elements.
  @Input() name:string;

  //To send/alter properties from child to parent you can create an @Output() which is a method with an EventEmitter Object that you set equal to the custom event specified in the parent component. Then you set a method to be invoked in the child component which emits the event emitter which triggers the custom event in the parent component.
  @Output('btnClick') onButtonClick = new EventEmitter();

  fireButtonClick(e) {
    this.onButtonClick.emit(e);
  }

  constructor() { }

  ngOnInit() {
  }

}

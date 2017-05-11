import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'component-communication',
  templateUrl: './parent.component.html',
  styles: [`
    p {
      margin: 5px 0;
    }

    @media screen and (max-width: 768px) {
      div {
        display: block;
      }
    }
  `]
})
export class ParentComponent implements OnInit {

  name:string = 'leahciM';
  nameIsReversed:boolean = true;

  toggleNameReverse(e) {
    console.log(e);
    if(this.nameIsReversed) {
      this.name = "Michael";
      this.nameIsReversed = false;
      return;
    }
    this.name = "leahciM";
    this.nameIsReversed = true;
  }

  constructor() { }

  ngOnInit() {
  }

}

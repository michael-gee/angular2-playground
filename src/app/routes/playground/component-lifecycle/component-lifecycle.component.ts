import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'component-lifecycle',
  templateUrl: './component-lifecycle.component.html',
  styles: [`
    li {
      margin: 10px 0;
    }
  `]
})
export class ComponentLifecycleComponent implements OnInit {

  constructor() {
    //console.log("********* LIFECYCLE ***********");
  //  console.log("constructor called");
  }

  ngOnInit() {
  //  console.log("ngOnInit called");
  }

}

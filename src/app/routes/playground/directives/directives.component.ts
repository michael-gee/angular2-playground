import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'directives',
  templateUrl: './directives.component.html',
  styles: [`
    h3 {
      font-size: 2em;
      margin: 0;
    }

    hr {
      margin: 25px 0;
    }
  `]
})
export class DirectivesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <h1>Footer</h1>
  `,
  styles: [`
    h1 {
      clear: both;
      background-color: black;
      color: white;
    }
  `]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

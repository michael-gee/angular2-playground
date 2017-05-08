import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <app-toolbar>
      <div main-title>
        Practice
        <iron-icon icon="app-icons:insert-photo"></iron-icon>
      </div>
    </app-toolbar>
  `,
  styles: [`
    app-toolbar {
      background-color: purple;
      color: white;
      font-size: 2.5em;
      height: 75px;
      text-align: center;
    }

    iron-icon {
      padding-bottom: 3px;
      margin-left: 5px;
    }
  `]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

import { LocationService } from '../../@services/location.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [`
    app-toolbar {
      font-size: 2.5em;
    }
      div[main-title] {
        display: flex;
        justify-content: center;
      }

    #main-toolbar {
      background-color: purple;
      color: white;
      height: 75px;
      padding: 0;
    }

    #secondary-toolbar {
      background-color: #eee;
      height: 50px;
      display: flex;
      justify-content: center;
      padding: 0;
    }
      paper-tabs {
        font-size: .8em;
        --paper-tabs-selection-bar-color: purple;
        --paper-tab-ink: purple;
      }

    iron-icon {
      margin-top: 4px;
      margin-left: 7px;
    }
  `]
})
export class HeaderComponent implements OnInit {

  currentLocation:number;

  constructor(private location:LocationService) { }

  ngOnInit() {
    this.location.getLocation();
    this.currentLocation = this.location.selected;
  }


}

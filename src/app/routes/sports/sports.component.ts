import { Component, OnInit } from '@angular/core';
import { Sport } from './sport';
import { SPORTS } from './mock-sports';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html'
})
export class SportsComponent implements OnInit {
  sports = SPORTS;

  favSport:Sport = this.sports[0];
  currentlySelected:Sport = null;

  constructor() {
  }

  ngOnInit() {
  }

  //SET FAV METHOD
  setFavSport() {
    this.favSport = this.currentlySelected;
  }

  toggleSportDetail(e) {
    if(e.event.target.localName === "paper-icon-button"){
      if(e.event.target.id === "closeDetails-button") {
        this.currentlySelected = null;
      }
      return;
    }
    this.currentlySelected = e.sport;
  }

}

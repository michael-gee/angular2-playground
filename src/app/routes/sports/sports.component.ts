import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Sport } from './sport';

const SPORTS:Sport[] = [
  new Sport(1, 'Basketball'),
  new Sport(2, 'Football'),
  new Sport(3, 'Hockey'),
  new Sport(4, 'Soccer'),
  new Sport(5, 'Baseball')
];

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {
  sports = SPORTS;

  title:string = 'Sports';
  favSport:string = this.sports[0].name;

  inputError:string = '';
  currentlyEditting:string = '';
  currentlySelected:string = '';

  @ViewChild("addSportInput") addInputText: ElementRef;
  @ViewChild("editSportInput") editInputText: ElementRef;

  constructor() {
  }

  ngOnInit() {
  }

  sportsConfig(method, input) {
    if(input === undefined && method === 'add' ||
       input === undefined && method === 'edit') {
      this.inputError = "Error: Please enter a new value.";
      return;
    }

    if(method === 'add') {
      input = this.titleCaseInput(input);
      this.sports.push(new Sport(this.sports.length + 1, input));
      this.addInputText.nativeElement.value = undefined;
      this.inputError = '';
      return;
    }else if(method === 'edit') {
      input = this.titleCaseInput(input);
      this.sports[this.findSportIndex(this.currentlyEditting)].name = input;
      this.currentlyEditting = '';
      this.inputError = '';
      return;
    }
  }

  //SET FAV METHOD
  setFavSport() {
    this.favSport = this.currentlySelected;
  }

  //TOGGLE METHODS
  toggleEditInput(method, event) {
    if(method === 'open' && this.currentlyEditting === event.target.name) {
      return;
    }else if(method === 'open' && this.currentlyEditting === '') {
      this.currentlyEditting = event.target.name;
      this.inputError = '';
      return;
    }else if(method === 'close') {
      this.currentlyEditting = '';
      this.inputError = '';
    }
  }

  toggleSportDetails(method, event) {
    if(event.target.localName === "paper-icon-button"){
      if(event.target.id === "closeDetails-button") {
        this.currentlySelected = '';
      }
      return;
    }
    this.currentlySelected = event.target.id;
  }

  //Find array index of passed Input
  findSportIndex(input) {
    return this.sports.map(function(e) { return e.name; }).indexOf(input);
  }

  titleCaseInput(input) {
    return input.toLowerCase().split(' ').map(function(word) {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
  }

}

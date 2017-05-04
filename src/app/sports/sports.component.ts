import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Sport } from '../sport';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  title:string = 'Sports';
  sports:Array<any> = [
    new Sport(1, 'Basketball'),
    new Sport(2, 'Football'),
    new Sport(3, 'Hockey'),
    new Sport(4, 'Soccer'),
    new Sport(5, 'Baseball')
  ];
  favSport:string = this.sports[0].name;
  inputError:string = '';
  currentlyEditting:string = '';

  @ViewChild("addSportInput") addInputText: ElementRef;
  @ViewChild("editSportInput") editInputText: ElementRef;

  constructor() {
  }

  ngOnInit() {
  }

  sportsConfig(method, input) {
    if(input === undefined && method === 'add') {
      this.inputError = "Error: Please enter a new value.";
      return;
    } else if(input === undefined && method === 'edit') {
      this.inputError = "Error: Please enter a new value.";
      return;
    }

    if(method === 'add') {
      input = this.titleCaseInput(input);
      this.sports.push(new Sport(this.sports.length, input));
      this.addInputText.nativeElement.value = '';
    }else if(method === 'edit') {
      input = this.titleCaseInput(input);
      var index = this.sports.map(function(e) { return e.name; }).indexOf(this.currentlyEditting);
      this.sports[index].name = input;
      this.currentlyEditting = '';
    }

  }

  toggleEditInput(method, event) {
    if(method === 'open' && this.currentlyEditting === event.toElement.name) {
      return;
    }else if(method === 'open' && this.currentlyEditting === '') {
      this.currentlyEditting = event.toElement.name;
      this.inputError = '';
      return;
    }else if(method === 'close') {
      this.currentlyEditting = '';
      this.inputError = '';
    }
  }

  titleCaseInput(input) {
    return input.toLowerCase().split(' ').map(function(word) {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
  }

}

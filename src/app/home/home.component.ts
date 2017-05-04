import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Sport } from '../sport';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title:string = 'Sports';
  sports:Array<any> = [
    new Sport(1, 'Basketball'),
    new Sport(2, 'Football'),
    new Sport(3, 'Hockey'),
    new Sport(4, 'Soccer'),
    new Sport(5, 'Baseball')
  ];
  favSport:string = this.sports[0].name;
  editConfigObj = {
    currentlyEditting: false,
    inputError: '',
    currentItem: ''
  };

  @ViewChild("addSportInput") addInputText: ElementRef;
  @ViewChild("editSportInput") editInputText: ElementRef;
  // editConfigObj is returing undefined -- fix error
  @ViewChild(this.editConfigObj.currentItem) currentSportElement: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  sportsConfig(method, input, button) {
    if(input === undefined && method === 'add') {
      return false;
    } else if(input === undefined && method === 'edit') {
      console.log("Hello!");
      this.editConfigObj.inputError = "Error: Please enter a new value.";
    }

    if(method === 'add') {
      this.sports.push(new Sport(this.sports.length, input));
      this.addInputText.nativeElement.value = '';
    }else if(method === 'edit') {

    }

  }

  toggleEditInput(currentSport) {
    this.editConfigObj.currentlyEditting = true;
    this.editConfigObj.currentItem = currentSport.toElement.name;
  }

}

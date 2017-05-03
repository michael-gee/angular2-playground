import { Component, OnInit, ViewChild } from '@angular/core';
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

  constructor() { }

  ngOnInit() {
  }

  addSport(sport) {
    if(sport === undefined) {
      return false;
    }
    console.log(sport);
  }

}

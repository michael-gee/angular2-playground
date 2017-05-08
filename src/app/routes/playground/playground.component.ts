import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {

  intro:string = "World";
  name:string = undefined;

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Sport } from '../sport';

@Component({
  selector: 'sport-detail',
  templateUrl: './sport-detail.component.html',
  styleUrls: ['./sport-detail.component.css']
})
export class SportDetailComponent implements OnInit {

  @Input() currentlySelected:Sport;
  @Output() onDetailToggle = new EventEmitter<any>();
  @Output() onNewFavSport = new EventEmitter<any>();

  fireSportDetailEvent(method, event) {
    this.onDetailToggle.emit({ method, event });
  }

  setNewFavSport(){
    this.onNewFavSport.emit();
  }

  constructor() { }

  ngOnInit() {
  }

}

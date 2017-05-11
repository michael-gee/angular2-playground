import {
  Component,
  OnInit,
  Input,
  Output,
  ViewChild,
  ElementRef,
  EventEmitter
} from '@angular/core';
import { Sport } from '../sport';

@Component({
  selector: 'sport-list',
  templateUrl: './sport-list.component.html',
  styleUrls: ['./sport-list.component.css']
})
export class SportListComponent implements OnInit {
  @Input() sports:Array<Sport>;
  @Input() favSport:Sport;
  @Input() currentlySelected:Sport;

  @Output() onDetailToggle = new EventEmitter();

  title:string = 'Sports';

  inputError:string = '';
  currentlyEditting:Sport = null;

  @ViewChild("addSportInput") addInputText: ElementRef;
  @ViewChild("editSportInput") editInputText: ElementRef;

  constructor() { }

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
      this.currentlyEditting.name = input;
      this.currentlyEditting = null;
      this.inputError = '';
      return;
    }
  }

  //TOGGLE METHODS
  toggleEditInput(method:string, currentSport:Sport) {
    if(method === 'open' && this.currentlyEditting === currentSport) {
      return;
    }else if(method === 'open' && this.currentlyEditting === null) {
      this.currentlyEditting = currentSport;
      this.inputError = '';
      return;
    }else if(method === 'close') {
      this.currentlyEditting = null;
      this.inputError = '';
    }
  }

  fireSportToggleEvent(method, event, sport) {
    this.onDetailToggle.emit({method, event, sport});
  }


  titleCaseInput(input:string) {
    return input.toLowerCase().split(' ').map(function(word) {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
  }

}

import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { LoggingService } from '../../logging.service';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
  //encapsulation: ViewEncapsulation.None
})
export class PlaygroundComponent implements OnInit {

  constructor(private loggingService:LoggingService) { }

  ngOnInit() {
    this.loggingService.helloWorld();
  }

}

import { Component, OnInit } from '@angular/core';

//Since we are using the service in the app.component (the parent of all of our layout and route components) we can now have access TO THE SAME ISNTANCE of the service in all the child components
import { LoggingService } from './@services/logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ LoggingService ]
})
export class AppComponent implements OnInit {

  constructor(private loggingService:LoggingService) { }

  ngOnInit() {
  }

}

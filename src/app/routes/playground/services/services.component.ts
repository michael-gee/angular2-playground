import { Component, OnInit } from '@angular/core';

//We must import our Service Class to be able to use in our component
import { LoggingService } from '../../../@services/logging.service';

@Component({
  selector: 'services',
  templateUrl: './services.component.html',
  //Since we are using the Service in a CHILD COMPONENT, we will have an entirely new instance of our service in this component.
  //To make it to where we are using the same instance as the parent component, we would delete the providers: property
  providers: [ LoggingService ]
})
export class ServicesComponent implements OnInit {

  displayMessage:string;

  //To create an instance of our service, we specify it in the component's constructor method. The name can be whatever we want it to be but the TYPE specified must be the SERVICE CLASS that you want to be injected from a service.ts file.
  constructor(private loggingService:LoggingService) { }

  ngOnInit() {
    //After we include the Service class in our providers: property, we can now use the class instance object in our component with all the methods and properties included in our service we specify.

    //this.loggingService.logToConsole("Hello World from our Custom Service!!!");
  }

  displayServiceMessage(message:string) {
    this.displayMessage = message;
  }

}

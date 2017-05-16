export class LoggingService {

  loggedMessage:string;

  logToConsole(message:string) {
    console.log('Displayed message from our service!');
    console.log(`Message: ${message}`);

    this.loggedMessage = message;
  }

  helloWorld(){
    console.log('Displayed message from our service!');
    console.log(`Hello World!`);
  }

}

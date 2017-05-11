import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'local-references',
  templateUrl: './local-references.component.html',
  styles: [`
    p {
      margin: 5px 0;
    }

    paper-button {
      margin-top: 25px;
    }
  `]
})
export class LocalReferencesComponent implements OnInit {

  @ViewChild('localRefFromViewChild') viewChildRef:ElementRef;

  constructor() { }

  ngOnInit() {
    //console.log("********** LOCAL REFERENCES ***********");
    //console.log(this.viewChildRef);
    //console.log(this.viewChildRef.nativeElement);
    //console.log(this.viewChildRef.nativeElement.innerHTML);
  }

  viewLocalRef(element) {
    console.log(element);
    console.log(element.id);

    //Changing the dom with Local References is STRONGLY adviced against because there is a better way in Angular to manipulate the DOM and that is with Directives. So with Local Refs and ViewChild it is much better to just get the values of the HTML elements but not manipulate them like done below.
    element.id = "helloWorld";
  }

}

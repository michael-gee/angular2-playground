import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
  //Adding the square brackets around the selector property makes it to where you don't have to add the square brackets in the HTML template when you include it inside your HTML tags as attributes.
  selector: '[myBasicDirective]'
})
export class BasicDirective implements OnInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = "red";
    this.elementRef.nativeElement.style.color = "white";
    this.elementRef.nativeElement.style.padding = "5px";
  }

}

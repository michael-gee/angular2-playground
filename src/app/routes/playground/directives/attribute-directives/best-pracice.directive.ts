import {
  Directive,
  OnInit,
  Input,
  ElementRef,
  Renderer2,
  HostListener,
  HostBinding
 } from '@angular/core';

@Directive({
  selector: '[myBestPraciceDirective]'
})
export class BestPraciceDirective implements OnInit{
  //With custom property binding an the @Input decorator you can allow the user to set which colors can be set for the actions and display that will take place within the directive.
  @Input() defaultColor:string = "blue";
  @Input() highlightColor:string = "purple";


  //When you just want to bind to a PROPERTY of the element which you attach the directive to, instead of using the renderer you can just use @HostBinding. This is where you can gain access to the host's html properties and styles like you would through accessing the DOM normal JavaScript
  @HostBinding('style.backgroundColor') backgroundColor:string;
  @HostBinding('style.color') textColor:string = 'white';

  constructor(private elRef:ElementRef, private renderer:Renderer2) { }

  //It is best practice to configure your directive in the OnInit method instead of inside the constructor - These configurations are static and set whenever you include the directive in an element
  ngOnInit() {
    //Changing them element with the renderer(2)
    this.renderer.setStyle(this.elRef.nativeElement, 'padding', '5px');

    //Changing the element with HostBinding and Property Binding
    this.backgroundColor = this.defaultColor;
  }

  //To trigger your directive only when a certain event happens, you can use @HostListener to listen for an event to happen on the HTML element where you included your Directive and run a method you provide when the listener is triggered. So whenever you mouse over an element with out myBestPraciceDirective directive, our mouseover() event we specified will be triggered.
  @HostListener('mouseenter') mouseover(eventData:Event) {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData:Event) {
    this.backgroundColor = this.defaultColor;
  }

}

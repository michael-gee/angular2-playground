import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
 selector: '[displayXTimes]'
})

export class StructuralDirective {

  constructor(private templateRef:TemplateRef<any>, private vcRef:ViewContainerRef ) { }

  //The setter name MUST BE EXACTLY THE SAME AS THE DIRECTIVE SELECTOR ABOVE -- displayXTimes -- or it will return an error.
  @Input() set displayXTimes(number:number) {
    if(typeof number === 'number'){
      for(let i = 1; i <= number; i++) {
        this.vcRef.createEmbeddedView(this.templateRef);
      }
    }
  }

}

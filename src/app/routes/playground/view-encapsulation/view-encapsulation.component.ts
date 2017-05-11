import { Component } from '@angular/core';

@Component({
  selector: 'view-encapsulation',
  template: `
    <h2>View Encapsulation</h2>
    <p>There are no shared styles in Angular componets because of View Encapsulation. This means that every single individual component has its own styles and will not bleed its styles into another component unless the <strong>ViewEncapsulation</strong> is overwritten. But if you set the <strong>encapsulation</strong> property in the parent Class Decorator to ViewEncapsulation.None, all the styles in the parent component will bleed into its child elements. So for example in the parent element, there is a p color:blue that is specific to the parent element but if we change the ViewEncapsulation to none then all the children's paragraphs would be set to blue.</p>
  `,
  styles: [``]
})


export class ViewEncapsulationComponent {



}

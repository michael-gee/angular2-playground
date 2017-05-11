import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//Polymer Modules
import { PolymerModule } from '@codebakery/origami';
import { IronElementsModule, PaperElementsModule } from '@codebakery/origami/lib/collections';

import { AppComponent } from './app.component';
//Layout Components
import { HeaderComponent } from './layout/header.component';
import { FooterComponent } from './layout/footer.component';
//Route Components
import { SportsComponent } from './routes/sports/sports.component';
import { PlaygroundComponent } from './routes/playground/playground.component';
  import { TwoWayBindingComponent } from './routes/playground/two-way-binding/two-way-binding.component';
  import { ViewEncapsulationComponent } from './routes/playground/view-encapsulation/view-encapsulation.component';
  import { LocalReferencesComponent } from './routes/playground/local-references/local-references.component';
  import { NgContentComponent } from './routes/playground/ng-content/ng-content.component';
  import { ComponentLifecycleComponent } from './routes/playground/component-lifecycle/component-lifecycle.component';
  //Component Communication
  import { ParentComponent } from './routes/playground/component-communication/parent.component';
    import { ChildComponent } from './routes/playground/component-communication/child/child.component';
import { ChallengeComponent } from './routes/challenge/challenge.component';
  import { GameControlComponent } from './routes/challenge/game-control/game-control.component';
    import { OddComponent } from './routes/challenge/odd/odd.component';
    import { EvenComponent } from './routes/challenge/even/even.component';
import { SportDetailComponent } from './routes/sports/sport-detail/sport-detail.component';
import { SportListComponent } from './routes/sports/sport-list/sport-list.component';

@NgModule({
  declarations: [
    AppComponent,
    //Layout Declarations
    HeaderComponent,
    FooterComponent,
    //Route Components
    SportsComponent,
    PlaygroundComponent,
      TwoWayBindingComponent,
      ViewEncapsulationComponent,
      LocalReferencesComponent,
      NgContentComponent,
      ComponentLifecycleComponent,
      //Component Communication
      ParentComponent,
        ChildComponent,
      ChallengeComponent,
        GameControlComponent,
          OddComponent,
          EvenComponent,
          SportDetailComponent,
          SportListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //Polymer
    PolymerModule,
    IronElementsModule,
    PaperElementsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

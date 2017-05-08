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


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SportsComponent,
    PlaygroundComponent
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

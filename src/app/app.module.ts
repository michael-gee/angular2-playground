import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//Polymer Modules
import { PolymerModule } from '@codebakery/origami';
import { IronElementsModule, PaperElementsModule } from '@codebakery/origami/lib/collections';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SportsComponent } from './sports/sports.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SportsComponent
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

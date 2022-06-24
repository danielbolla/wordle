import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PadSlpit } from './padSplit.pipe';
import { LimitGuessesPipe } from './limit-guesses.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PadSlpit,
    LimitGuessesPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

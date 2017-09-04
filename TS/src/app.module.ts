import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {QuoteService} from './quote.service';
import {SecondComponent} from './second.component';
import {AppComponent} from './app.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, SecondComponent],
  providers: [
    { provide: QuoteService, useClass: QuoteService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
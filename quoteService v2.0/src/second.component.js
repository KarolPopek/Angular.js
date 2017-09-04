import {Component, Inject} from '@angular/core';
import {QuoteService} from './quote.service';

@Component({
    selector:'second',
    template:'<p><em>{{quote.line}}</em>{{quote.author}}</p>'
})

export class SecondComponent {
  constructor (@Inject(QuoteService)quoteService){
      quoteService.generateRandomQuotes(2000, quote => this.quote = quote);
  }
}

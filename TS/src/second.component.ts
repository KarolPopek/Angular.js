import {Component, Inject} from '@angular/core';
import {Quote} from './quote.model';
import {QuoteService} from './quote.service';

@Component({
  selector: 'second',
  template: '<p><em>{{quote.line}}</em>{{quote.author}}</p>'
})
export class SecondComponent {

  quote: Quote;

  constructor(quoteService: QuoteService) {
    quoteService.generateRandomQuotes(2000, quote => this.quote = quote);
  }
}

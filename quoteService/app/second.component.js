(function(app){

  const Component = ng.core.Component;
  const QuoteService = app.QuoteService;

  app.SecondComponent = Component({
    selector: 'second',
    template: '<p><em>{{quote.line}}</em> - {{quote.author}}</p>'
  })
  .Class({
    constructor: [QuoteService, function SecondComponent(quoteService) {
      const self = this;
      quoteService.generateRandomQuotes(2000, function(quote) {
        self.quote = quote;
      });
    }]
  });

})(window.app || (window.app = {}));

(function(){

  const Component = ng.core.Component;
  const NgModule = ng.core.NgModule;
  const BrowserModule = ng.platformBrowser.BrowserModule;
  const platformBrowserDynamic = ng.platformBrowserDynamic.platformBrowserDynamic();
  const Class = ng.core.Class;

  var QuoteService = Class(
    {
      constructor: function QuoteService() {
        this.quotes = quotes;
      },
      getRandomQuote: function() {
        let randomIndex = Math.floor(Math.random() * quotes.length);
        return quotes[randomIndex];
      }
  });


var TestService = Class(
  {
    constructor: function() {},
    getRandomQuote: function() {
      return {
        line: 'Cytat testowy',
        author: 'Testowy autor'
      };
    }
});

  var SecondComponent = Component({
    selector: 'second',
    template: '<p><em>{{quote.line}}</em> - {{quote.author}}</p>'
  })
  .Class({
    constructor: [QuoteService, function SecondComponent(quoteService) {
      this.quote = quoteService.getRandomQuote();
    }]
  });

  var AppComponent = Component({
      selector: 'my-app',
      template: `<h1>Angular 2.0 Hello World!</h1>
                <second></second>
                <second></second>`
  })
  .Class({
    constructor : function AppComponent(){}
  });
 var  AppModule = NgModule({
   imports: [BrowserModule],
   declarations: [AppComponent, SecondComponent],
   providers: [
                {provide: QuoteService, useValue: new QuoteService()}
              ],
   bootstrap: [AppComponent]
 })
 .Class({
   constructor : function(){}
 })

 platformBrowserDynamic.bootstrapModule(AppModule);

 var quotes = [
   {
     'line': 'Everybody is a genius. But if you judge a fish by its ability to climb a tree, it will live its whole life believing that it is stupid.',
     'author': 'Albert Einstein'
   },
   {
     'line': 'Beware of small expenses; a small leak will sink a great ship.',
     'author': 'Benjamin Franklin'
   },
   {
     'line': 'Measuring programming progress by lines of code is like measuring aircraft building progress by weight.',
     'author': ' Bill Gates'
   },
   {
     'line': 'Walking on water and developing software from a specification are easy if both are frozen.',
     'author': 'Edward V. Berard'
   },
   {
     'line': "It always takes longer than you expect, even when you take into account Hofstadter's Law.",
     'author': "Hofstadter's Law"
   }
];
})();

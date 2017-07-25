(function(app){

  const NgModule = ng.core.NgModule;
  const BrowserModule = ng.platformBrowser.BrowserModule;
  const SecondComponent = app.SecondComponent;
  const AppComponent = app.AppComponent;
  const QuoteService = app.QuoteService;

  app.AppModule = NgModule({
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

})(window.app || (window.app = {}));

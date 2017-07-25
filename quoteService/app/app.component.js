(function(app){

  const Component = ng.core.Component;

  app.AppComponent = Component({
      selector: 'my-app',
      template: `<h1>Angular 2.0 Hello World!</h1>
                <second></second>`
  })
  .Class({
    constructor : function AppComponent(){}
  });

})(window.app || (window.app = {}));

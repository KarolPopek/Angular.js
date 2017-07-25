(function(app){

  const platformBrowserDynamic = ng.platformBrowserDynamic.platformBrowserDynamic();
  const AppModule = app.AppModule;
  platformBrowserDynamic.bootstrapModule(app.AppModule);

})(window.app || (window.app = {}));

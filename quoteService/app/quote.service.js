(function(){

  const Class = ng.core.Class;

  app.QuoteService = Class(
    {
      constructor: function QuoteService() {
        this.quotes = quotes;
      },
      getRandomQuote: function() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        return quotes[randomIndex];
      },
      generateRandomQuotes: function(delay, callback) {
        const self = this;
        callback(this.getRandomQuote());
        setTimeout(function(){
          callback(self.getRandomQuote());
        },delay);
      }
  });

 const quotes = [
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
})(window.app || (window.app = {}));

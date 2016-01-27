var Jasmine = require('jasmine');
var jasmine = new Jasmine();

jasmine.loadConfigFile('spec/support/jasmine.json');

jasmine.onComplete(function(passed){
  if(passed){
    console.log('Todas los test salieron correctos!');
  }else{
    console.log('Un test ha fallado');
  }
});

jasmine.configureDefaultReporter({
  showColors:true,
  jasmineCorePath:this.jasmineCorePath
});

jasmine.execute();

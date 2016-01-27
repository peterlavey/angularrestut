describe('AnimalesListCtrl', function(){

  beforeEach(module('FenrirApp'));
  var scope, AnimalesCtrl;
  beforeEach(inject(function($controller, $rootScope){
    scope=$rootScope.$new();
    AnimalesCtrl=$controller('AnimalesCtrl', {
      $scope:scope
    });
  }));

  it('Debe haber 3 registro de animales en el controlador', inject(function($controller) {
    expect(scope.animales.length).toBe(4);
  }));
  it('Debe haber 2 registro de animales Array', inject(function($controller) {
    expect(scope.animalesArray.length).toBe(2);
  }));

});

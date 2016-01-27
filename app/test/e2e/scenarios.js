describe('AnimalesListCtrl', function(){
  it('Debe crear el modelo animales con 3 animales', function(){
    var Controller = require('../../js/controllers/controller');
    var scope={},
    ctrl = new Controller(scope);
    expect(scope.animales.length).toBe(3);
  });
});

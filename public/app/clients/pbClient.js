angular.module('app').factory('pbClient', function($resource) {
  var ClientResource = $resource('/api/clients/:_id', {_id: "@id"}, {
    update: {method:'PUT', isArray:false}
  });

  return ClientResource;
});

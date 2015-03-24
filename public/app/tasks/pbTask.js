angular.module('app').factory('pbTask', function($resource) {
  var TaskResource = $resource('/api/tasks/:_id', {_id: "@id"}, {
    update: {method:'PUT', isArray:false}
  });

  return TaskResource;
});

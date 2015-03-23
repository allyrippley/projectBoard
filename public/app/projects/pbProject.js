angular.module('app').factory('pbProject', function($resource) {
  var ProjectResource = $resource('/api/projects/:_id', {_id: "@id"}, {
    update: {method:'PUT', isArray:false}
  });

  return ProjectResource;
});

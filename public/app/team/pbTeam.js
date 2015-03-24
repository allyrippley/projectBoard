angular.module('app').factory('pbTeam', function($resource) {
  var TeamResource = $resource('/api/teams/:_id', {_id: "@id"}, {
    update: {method:'PUT', isArray:false}
  });

  return TeamResource;
});

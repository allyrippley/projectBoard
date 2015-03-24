angular.module('app').factory('pbReport', function($resource) {
  var ReportResource = $resource('/api/reports/:_id', {_id: "@id"}, {
    update: {method:'PUT', isArray:false}
  });

  return ReportResource;
});

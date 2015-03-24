angular.module('app').factory('pbCalendar', function($resource) {
  var CalendarResource = $resource('/api/calendars/:_id', {_id: "@id"}, {
    update: {method:'PUT', isArray:false}
  });

  return CalendarResource;
});

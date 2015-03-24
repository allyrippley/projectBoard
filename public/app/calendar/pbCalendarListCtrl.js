angular.module('app').controller('pbCalendarListCtrl', function($scope, pbCalendar) {
  $scope.calendars = pbCalendar.query();

  $scope.sortOptions= [{value:"title",text: "Sort by Title"}, {value:"published", text: "Sort by Publish Date"}];
  $scope.sortOrder = $scope.sortOptions[0].value;
});

angular.module('app').controller('pbReportListCtrl', function($scope, pbReport) {
  $scope.reports = pbReport.query();

  $scope.sortOptions= [{value:"title",text: "Sort by Title"}, {value:"published", text: "Sort by Publish Date"}];
  $scope.sortOrder = $scope.sortOptions[0].value;
});

angular.module('app').controller('pbProjectListCtrl', function($scope, pbProject) {
  $scope.projects = pbProject.query();

  $scope.sortOptions= [{value:"title",text: "Sort by Title"}, {value:"published", text: "Sort by Publish Date"}];
  $scope.sortOrder = $scope.sortOptions[0].value;
});

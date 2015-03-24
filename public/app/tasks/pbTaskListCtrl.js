angular.module('app').controller('pbTaskListCtrl', function($scope, pbTask) {
  $scope.tasks = pbTask.query();

  $scope.sortOptions= [{value:"project", text: "Sort by Project"}, {value:"member", text: "Sort by Member Assigned to"}];
  $scope.sortOrder = $scope.sortOptions[0].value;
});

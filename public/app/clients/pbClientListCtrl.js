angular.module('app').controller('pbClientListCtrl', function($scope, pbClient) {
  $scope.clients = pbClient.query();

  $scope.sortOptions= [{value:"title",text: "Sort by Title"}, {value:"published", text: "Sort by Publish Date"}];
  $scope.sortOrder = $scope.sortOptions[0].value;
});

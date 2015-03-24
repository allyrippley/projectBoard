angular.module('app').controller('pbTeamListCtrl', function($scope, pbTeam) {
  $scope.teams = pbTeam.query();

  $scope.sortOptions= [{value:"title",text: "Sort by Title"}, {value:"published", text: "Sort by Publish Date"}];
  $scope.sortOrder = $scope.sortOptions[0].value;
});

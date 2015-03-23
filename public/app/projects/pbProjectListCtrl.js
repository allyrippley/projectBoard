angular.module('app').controller('pbProjectListCtrl', function($scope, pbProject) {
  $scope.projects = pbProject.query();
});

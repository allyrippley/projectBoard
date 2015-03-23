angular.module('app').controller('pbMainCtrl', function($scope, pbProject) {
  $scope.projects = pbProject.query();

});

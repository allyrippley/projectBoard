angular.module('app').controller('pbUserListCtrl', function($scope, pbUser) {
  $scope.users = pbUser.query();
});

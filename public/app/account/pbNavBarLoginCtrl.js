angular.module('app').controller('pbNavBarLoginCtrl', function($scope, $http, pbIdentity, pbNotifier, pbAuth) {
  $scope.identity = pbIdentity;
  $scope.signin = function(username, password) {
    pbAuth.authenticateUser(username, password).then(function(success) {
      if(success) {
        pbNotifier.notify('Successfully logged in!');
      } else {
        pbNotifier.notify('Failure logging in! Please check credentials and try again.');
      }
    })
  }
});

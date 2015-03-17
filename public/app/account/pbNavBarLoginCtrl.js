angular.module('app').controller('pbNavBarLoginCtrl', function($scope, $http, pbIdentity, pbNotifier, pbAuth, $location) {
  $scope.identity = pbIdentity;
  $scope.signin = function(username, password) {
    pbAuth.authenticateUser(username, password).then(function(success) {
      if(success) {
        pbNotifier.notify('Successfully logged in!');
      } else {
        pbNotifier.notify('Failure logging in! Please check credentials and try again.');
      }
    })
  },
  $scope.signout = function() {
    pbAuth.logoutUser().then(function() {
      $scope.username = "";
      $scope.password = "";
      pbNotifier.notify('You have successfully signed out!');
      $location.path('/');
    })
  }
});

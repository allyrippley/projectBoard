angular.module('app').controller('pbSignupCtrl', function($scope, pbUser, pbNotifier, $location, pbAuth) {

  $scope.signup = function() {
    var newUserData = {
      username: $scope.email,
      password: $scope.password,
      firstName: $scope.fname,
      lastName: $scope.lname
    };

    pbAuth.createUser(newUserData).then(function() {
      pbNotifier.notify('User account created!');
      $location.path('/');
    }, function(reason) {
      pbNotifier.error(reason);
    });
  }
})

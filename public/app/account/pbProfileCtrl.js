angular.module('app').controller('pbProfileCtrl', function($scope, pbAuth, pbIdentity, pbNotifier) {
  $scope.email = pbIdentity.currentUser.username;
  $scope.fname = pbIdentity.currentUser.firstName;
  $scope.lname = pbIdentity.currentUser.lastName;

  $scope.update = function() {
    var newUserData = {
      username: $scope.email,
      firstName: $scope.fname,
      lastName: $scope.lname
    }
    if($scope.password && $scope.password.length > 0) {
      newUserData.password = $scope.password;
    }

    pbAuth.updateCurrentUser(newUserData).then(function() {
      pbNotifier.notify('Your user account has been updated');
    }, function(reason) {
      pbNotifier.error(reason);
    })
  }

})

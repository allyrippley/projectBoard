angular.module('app').factory('pbIdentity', function($window, pbUser) {
  var currentUser;
  if(!!$window.bootstrappedUserObject) {
    currentUser = new pbUser();
    angular.extend(currentUser, $window.bootstrappedUserObject);
  }
  return {
    currentUser: currentUser,
    isAuthenticated: function() {
      return !!this.currentUser && this.currentUser.roles.indexOf(role) > -1;
    }
  }
});

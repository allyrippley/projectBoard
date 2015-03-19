angular.module('app').factory('pbIdentity', function($window, pbUser) {
  var currentUser;
  if(!!$window.bootstrappedUserObject) {
    currentUser = new pbUser();
    angular.extend(currentUser, $window.bootstrappedUserObject);
  }
  return {
    currentUser: currentUser,
    isAuthorized: function() {
      return !!this.currentUser && this.currentUser.roles.indexOf('admin') > -1;
    },
    isAuthenticated: function() {
      return !!this.currentUser;
    }
  }
});

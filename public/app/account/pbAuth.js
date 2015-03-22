angular.module('app').factory('pbAuth', function($http, pbIdentity, $q, $rootScope, pbUser) {
  return {
    authenticateUser: function(username, password) {
      var dfd = $q.defer();
      $http.post('/login', {username:username, password:password}).then(function(response) {
        if(response.data.success) {
          var user = new pbUser();
          angular.extend(user, response.data.user);
          pbIdentity.currentUser = user;
          dfd.resolve(true);
        } else {
          dfd.resolve(false);
        }
        return dfd.promise;
      })
    },
    createUser: function(newUserData) {
      var newUser = new pbUser(newUserData);
      var dfd = $q.defer();

      newUser.$save().then(function() {
        pbIdentity.currentUser = newUser;
        dfd.resolve();
      }//, function(response) {
        //dfd.reject(response.data.reason);
      //}
      );

      return dfd.promise;

    },
    updateCurrentUser: function(newUserData){
      var dfd = $q.defer();
      var clone = angular.copy(pbIdentity.currentUser);
      angular.extend(clone, newUserData);
      clone.$update().then(function() {
        pbIdentity.currentUser = clone;
        dfd.resolve();
      }, function(response) {
        dfd.reject(response.data.reason);
      });
      return dfd.promise();
    },
    logoutUser: function() {
      var dfd = $q.defer();
      $http.post('/logout', {logout:true}).then(function() {
        pbIdentity.currentUser = undefined;
        dfd.resolve();
      });
      return dfd.promise;
    },
    authorizeCurrentUserForRoute: function(role) {
      if(pbIdentity.isAuthorized(role)) {
        return true;
      } else {
        return $q.reject('not authorized');
      }
    },
    authorizeAuthenticateUserForRoute: function() {
      if(pbIdentity.isAuthenticated()) {
        return true;
      } else {
        return $q.reject('not authorized');
      }
    }
  }
});

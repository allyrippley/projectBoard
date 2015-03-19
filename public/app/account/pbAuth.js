angular.module('app').factory('pbAuth', function($http, pbIdentity, $q, pbUser) {
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
      });
    },
    logoutUser: function() {
      var dfd = $q.defer;
      $http.post('/logout', {logout:true}).then(function() {
        pbIdentity.currentUser = undefined;
        dfd.resolve();
      });
      return dfd.promise;
    }
  }
});

angular.module('app', ['ngResource', 'ngRoute']);

angular.module('app').config(function($routeProvider,
                                      $locationProvider) {

  var routeRoleChecks = {
    admin: {auth: function(pbIdentity, $q, pbAuth) {
      return pbAuth.authorizeCurrentUserForRoute('admin');
    }}
  }

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
  $routeProvider
    .when('/', { templateUrl: '/partials/main/main', controller: 'pbMainCtrl'})
    .when('/admin/users', { templateUrl: '/partials/admin/user-list',
      controller: 'pbUserListCtrl',
      resolve: routeRoleChecks.admin
    })
    .when('/signup', { templateUrl: '/partials/account/signup',
      controller: 'pbSignupCtrl'
    });

});

angular.module('app').run(function($rootScope, $location) {
  $rootScope.$on('$routeChangeError', function(evt, current, previous, rejection) {
    if(rejection === 'not authorized') {
      $location.path('/');
    }
  })
});

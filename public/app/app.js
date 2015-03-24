angular.module('app', ['ngResource', 'ngRoute']);

angular.module('app').config(function($routeProvider,
                                      $locationProvider) {

  var routeRoleChecks = {
    admin: {auth: function(pbAuth) {
      return pbAuth.authorizeCurrentUserForRoute('admin');
    }},
    user: {auth: function(pbAuth) {
      return pbAuth.authorizeAuthenticateUserForRoute();
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
    })
    .when('/profile', { templateUrl: '/partials/account/profile',
      controller: 'pbProfileCtrl', resolve: routeRoleChecks.user
    })
    .when('/clients', { templateUrl: '/partials/clients/client-list',
      controller: 'pbClientListCtrl', resolve: routeRoleChecks.user
    })
    .when('/projects', { templateUrl: '/partials/projects/project-list',
      controller: 'pbProjectListCtrl', resolve: routeRoleChecks.user
    })
    .when('/reports', { templateUrl: '/partials/reports/report-list',
      controller: 'pbReportListCtrl', resolve: routeRoleChecks.admin
    })
    .when('/calendars', { templateUrl: '/partials/calendar/calendar-list',
      controller: 'pbCalendarListCtrl', resolve: routeRoleChecks.admin
    })
    .when('/tasks', { templateUrl: '/partials/tasks/task-list',
      controller: 'pbTaskListCtrl', resolve: routeRoleChecks.user
    })
    .when('/team', { templateUrl: '/partials/team/team-list',
      controller: 'pbTeamListCtrl', resolve: routeRoleChecks.user
    });

});

angular.module('app').run(function($rootScope, $location) {
  $rootScope.$on('$routeChangeError', function(evt, current, previous, rejection) {
    if(rejection === 'not authorized') {
      $location.path('/');
    }
  })
});

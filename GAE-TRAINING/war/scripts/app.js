'use strict';

angular
  .module('gaeTrainingApp', [
    'ngRoute',
    'commService',
    'oitozero.ngSweetAlert'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/training-search', {
        templateUrl: 'views/ha-search-screen.html',
        controller: 'TrainingSearchCtrl',
        controllerAs: 'trainingSearch'
      })
      .when('/plans', {
        templateUrl: 'views/plan.html',
        controller: 'PlanCreateCtrl',
        controllerAs: 'planCreate'
      })
      .when('/plans/:planId', {
        templateUrl: 'views/plan.html',
        controller: 'PlanUpdateCtrl',
        controllerAs: 'planUpdate'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

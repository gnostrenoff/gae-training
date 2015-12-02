'use strict';

angular
  .module('testApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/training-search', {
        templateUrl: 'views/ha-search-screen.html',
        controller: 'TrainingSearchCtrl',
        controllerAs: 'trainSearch'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

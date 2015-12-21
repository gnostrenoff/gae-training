'use strict';

angular
  .module('gaeTrainingApp', [
    'ngRoute',
    'commService',
    'oitozero.ngSweetAlert',
    'factoryServices'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/trainings/dashboard', {
        templateUrl: 'views/trainings-dashboard.html',
        controller: 'TrainingDashboardCtrl'
      })
      .when('/trainings', {
        templateUrl: 'views/training.html',
        controller: 'TrainingCreateCtrl'
      })
      .when('/trainings/:trainingId', {
        templateUrl: 'views/trainingDetails.html',
        controller: 'TrainingUpdateCtrl'
      })
      .when('/exercices', {
        templateUrl: 'views/exercice.html',
        controller: 'ExerciceCreateCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

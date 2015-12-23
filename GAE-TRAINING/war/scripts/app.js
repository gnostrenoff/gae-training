'use strict';

angular
  .module('gaeTrainingApp', [
    'ngRoute',
    'commService',
    'oitozero.ngSweetAlert',
    'factoryServices',
    'timer'
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
      .when('/exercices/:exerciceId', {
        templateUrl: 'views/exerciceDetails.html',
        controller: 'ExerciceDetailsCtrl'
      })
      .when('/scores', {
        templateUrl: 'views/scores.html',
        controller: 'ScoreCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

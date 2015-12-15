'use strict';

angular.module('gaeTrainingApp').controller('TrainingSearchCtrl',
		TrainingSearchCtrlFnt);

TrainingSearchCtrlFnt.$inject = ['$scope', '$log', 'comm'];

function TrainingSearchCtrlFnt($scope, $log, comm) {

	$scope.tab = ["coucou", "caca", "yoyo"];

}

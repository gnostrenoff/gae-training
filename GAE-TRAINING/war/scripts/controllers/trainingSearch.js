'use strict';

angular.module('gaeTrainingApp').controller('TrainingSearchCtrl',
		TrainingSearchCtrlFnt);

TrainingSearchCtrlFnt.$inject = [ '$scope', '$log' ];

function TrainingSearchCtrlFnt($scope, $log) {

	$scope.tab = ["coucou", "caca", "yoyo"];

}

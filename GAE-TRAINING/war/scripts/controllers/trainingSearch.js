'use strict';

angular.module('gaeTrainingApp').controller('TrainingSearchCtrl',
		TrainingSearchCtrlFnt);

TrainingSearchCtrlFnt.$inject = [ '$scope', '$log' ];

function TrainingSearchCtrlFnt($scope, $log) {

	$scope.gLogin = function() {
		alert("gLogin not implemented..");
	}

	$scope.yLogin = function() {
		alert("yLogin not implemented..");
	}

	$scope.oLogin = function() {
		alert("oLogin not implemented..");
	}

}

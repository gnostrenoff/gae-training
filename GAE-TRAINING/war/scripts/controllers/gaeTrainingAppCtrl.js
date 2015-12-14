'use strict';

angular.module('gaeTrainingApp').controller('gaeTrainingAppCtrl',
		gaeTrainingAppCtrlFnt);

gaeTrainingAppCtrlFnt.$inject = [ '$scope', '$log' ];

function gaeTrainingAppCtrlFnt($scope, $log) {
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

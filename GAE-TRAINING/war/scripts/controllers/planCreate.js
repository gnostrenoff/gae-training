'use strict';

angular.module('gaeTrainingApp').controller('PlanCreateCtrl',
		PlanCreateCtrlFnt);

PlanCreateCtrlFnt.$inject = [ '$scope', '$log' ];

function PlanCreateCtrlFnt($scope, $log) {

	$scope.tab = ["exo1", "exo2"];
}

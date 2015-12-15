'use strict';

angular.module('gaeTrainingApp').controller('PlanCreateCtrl',
		PlanCreateCtrlFnt);

PlanCreateCtrlFnt.$inject = [ '$scope', '$log', 'comm', 'SweetAlert'];

function PlanCreateCtrlFnt($scope, $log, comm, SweetAlert) {

	$scope.tab = ["exo1", "exo2"];

	$scope.addTraining = function(){

		//check for empty fields

		comm.postTraining($scope.title, $scope.description).then(
			function(res){
				SweetAlert.swal("Good job!", "Your new training was successsfully added", "success");
			},
			function(err){
				SweetAlert.swal("Ooouups", "We were not able to save your new training, try later");
			}
		);
	}

}

'use strict';

angular.module('gaeTrainingApp').controller('PlanCreateCtrl',
		PlanCreateCtrlFnt);

PlanCreateCtrlFnt.$inject = [ '$scope', '$log', 'comm', 'SweetAlert'];

function PlanCreateCtrlFnt($scope, $log, comm, SweetAlert) {

	$scope.addTraining = function(){
		comm.postTraining($scope.plan).then(
			function(res){
				SweetAlert.swal("Good job!", "Your new training was successsfully added", "success");
			},
			function(err){
				SweetAlert.swal("Ooouups", "We were not able to save your new training, try later");
			}
		);
	}

}

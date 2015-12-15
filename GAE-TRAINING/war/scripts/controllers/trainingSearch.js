'use strict';

angular.module('gaeTrainingApp').controller('TrainingSearchCtrl',
		TrainingSearchCtrlFnt);

TrainingSearchCtrlFnt.$inject = ['$scope', '$log', 'comm', 'SweetAlert'];

function TrainingSearchCtrlFnt($scope, $log, comm, SweetAlert) {

	$scope.trainingList = {};

	comm.getTrainings().then(
		function(data){
			$scope.trainingList = data;
		},
		function(err){
			console.log(err);
			SweetAlert.swal("Ooouups", "unable to load trainings from server");
		}
	);
}

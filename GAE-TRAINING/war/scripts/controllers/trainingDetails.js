'use strict';

angular.module('gaeTrainingApp').controller('TrainingUpdateCtrl',
		TrainingUpdateCtrlFnt);

TrainingUpdateCtrlFnt.$inject = [ '$scope', '$window','$log', '$location', 'comm', 'SweetAlert'];

function TrainingUpdateCtrlFnt($scope, $window, $log, $location, comm, SweetAlert) {

	$scope.training = {};
	$scope.training.exercices = [];
	$scope.training.totalTime = 0;
	$scope.exoToShow = undefined;

	var trainingTitle = $location.path().split('/').pop();

	comm.getTrainings(trainingTitle).then(
		function(data){
			//we assume only one results is possible
			$scope.training = data[0];

			//if training has loaded with success, load exercices associated
			comm.getExercices($scope.training.title).then(
				function(data){
					$scope.training.exercices = data;
				},
				function(err){
					SweetAlert.swal("Ooouups", "Something went wrong");
				}
			);
		},
		function(err){
			SweetAlert.swal("Ooouups", "Something went wrong");
		}
	);

	//function shows details for selected exercice if hidden, hides it otherwise
	$scope.showExo = function(exo){
		if($scope.exoToShow != exo)
			$scope.exoToShow = exo;
		else
			$scope.exoToShow = undefined;
	}

}

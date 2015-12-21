'use strict';

angular.module('gaeTrainingApp').controller('TrainingCreateCtrl',
		TrainingCreateCtrlFnt);

TrainingCreateCtrlFnt.$inject = [ '$scope', '$log', 'comm', 'SweetAlert', 'factory'];

function TrainingCreateCtrlFnt($scope, $log, comm, SweetAlert, factory) {

	$scope.show = {};
	$scope.show.exoForm;
	$scope.training = {};
	$scope.training.exercices = [];

	$scope.addTraining = function(){
		var newTraining = factory.trainingCreation($scope.training.title, $scope.training.description, $scope.training.exercices);

console.log(newTraining);

		//post the training
		comm.postTraining(newTraining).then(
			function(data){
				SweetAlert.swal("Good job!", "Your new training plan was successfully added", "success")
			},
			function(err){
				SweetAlert.swal("Ooouups", "Something went wrong");
			}
		);
	}

}

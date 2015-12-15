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
		comm.postTraining($scope.Training).then(
			function(res){
				SweetAlert.swal("Good job!", "Your new training was successsfully added", "success");
			},
			function(err){
				SweetAlert.swal("Ooouups", "We were not able to save your new training, try later");
			}
		);
	}

	// $scope.addExercice = function(exercice){
	// 	// comm.postExercice($scope.exercice).then(
	// 	// 	function(res){
	// 	// 		//in case of success, assign the created exo to the current training Training
	// 	//
	// 	// 		$scope.showExoForm = false;
	// 	// 		SweetAlert.swal("Good job!", "Your new exercice was successsfully added", "success");
	// 	// 	},
	// 	// 	function(err){
	// 	// 		SweetAlert.swal("Ooouups", "We were not able to save your new exercice, try later");
	// 	// 	}
	// 	// );
	//
	// 	//$scope.training.exercices.push($scope.exercice);
	// 	//console.log($scope.training.exercices);
	//
	// 	var newExo = factory.exoCreation(exercice.title, exercice.description);
	// 	$scope.training.exercices.push(newExo);
	// 	$scope.show.exoForm = false;
	// }

}

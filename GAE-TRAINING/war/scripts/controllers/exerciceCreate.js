'use strict';

angular.module('gaeTrainingApp').controller('ExerciceCreateCtrl',
		ExerciceCreateCtrlFnt);

ExerciceCreateCtrlFnt.$inject = [ '$scope', '$log', 'comm', 'SweetAlert'];

function ExerciceCreateCtrlFnt($scope, $log, comm, SweetAlert) {

	$scope.exercice = {};

	$scope.addExercice = function(){

		console.log($scope.exercice);

		comm.postExercice($scope.exercice).then(
			function(res){
				$scope.showExoForm = false;
				SweetAlert.swal("Good job!", "Your new exercice was successsfully added", "success");
			},
			function(err){
				SweetAlert.swal("Ooouups", "We were not able to save your new exercice, try later");
			}
		);
	}

}

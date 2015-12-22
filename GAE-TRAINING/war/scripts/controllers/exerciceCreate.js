'use strict';

angular.module('gaeTrainingApp').controller('ExerciceCreateCtrl',
		ExerciceCreateCtrlFnt);

ExerciceCreateCtrlFnt.$inject = [ '$scope', '$log', 'comm', 'SweetAlert', 'factory'];

function ExerciceCreateCtrlFnt($scope, $log, comm, SweetAlert, factory) {

	$scope.addExercice = function(exercice){

		var newExo = factory.exoCreation(exercice.title, exercice.description, exercice.time);
		$scope.training.exercices.push(newExo);
		$scope.show.exoForm = false;
		console.log(newExo);
	}

}

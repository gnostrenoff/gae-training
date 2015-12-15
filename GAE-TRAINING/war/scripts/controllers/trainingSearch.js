'use strict';

angular.module('gaeTrainingApp').controller('TrainingSearchCtrl',
		TrainingSearchCtrlFnt);

TrainingSearchCtrlFnt.$inject = ['$scope', '$log', 'comm', 'SweetAlert'];

function TrainingSearchCtrlFnt($scope, $log, comm, SweetAlert) {

	$scope.tab = ["coucou", "caca", "yoyo"];
	$scope.trainingList = {};

	comm.getTrainings().then(
		function(data){
			console.log(data);
			$scope.trainingList = data;
		},
		function(err){
			console.log(err);
			SweetAlert.swal("Ooouups", "unable to load trainings from server");
		}
	);

	$scope.getTrainingList = function(){
		comm.getTrainings().then(
			function(data){
				console.log(data);
				$scope.trainingList = data;
			},
			function(err){
				SweetAlert.swal("Ooouups", err);
			}
		);
	}

}

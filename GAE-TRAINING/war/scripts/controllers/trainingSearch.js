'use strict';

angular.module('gaeTrainingApp').controller('TrainingSearchCtrl',
		TrainingSearchCtrlFnt);

TrainingSearchCtrlFnt.$inject = ['$scope', '$log', 'comm'];

function TrainingSearchCtrlFnt($scope, $log, comm) {

	$scope.tab = ["coucou", "caca", "yoyo"];
	$scope.trainingList = {};

	comm.getTrainings().then(
		function(data){
			console.log(data);
			$scope.trainingList = data;
		},
		function(err){
			SweetAlert.swal("Ooouups", err);
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

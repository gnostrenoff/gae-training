'use strict';

angular.module('gaeTrainingApp').controller('TrainingSearchCtrl',
		TrainingSearchCtrlFnt);

TrainingSearchCtrlFnt.$inject = ['$scope', '$log', 'comm', 'SweetAlert'];

function TrainingSearchCtrlFnt($scope, $log, comm, SweetAlert) {

	$scope.trainings = {};

	comm.getTrainings(null, null).then(
		function(data){
			$scope.trainings = data;
		},
		function(err){
			console.error(err);
			SweetAlert.swal("Ooouups", "Unable to load trainings from server.");
		}
	);

	$scope.onSearch = function() {
		console.log($scope.search);
		comm.getTrainings(null, $scope.search).then(
			function(data){
				$scope.trainings = data;
			},
			function(err){
				console.error(err);
				SweetAlert.swal("Ooouups", "Unable to load trainings from server.");
			}
		);
	};

}

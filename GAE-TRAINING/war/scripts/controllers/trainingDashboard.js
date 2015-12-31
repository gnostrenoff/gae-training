'use strict';

angular.module('gaeTrainingApp').controller('TrainingDashboardCtrl',
		TrainingDashboardCtrlFnt);

TrainingDashboardCtrlFnt.$inject = ['$scope', '$log', 'comm', 'SweetAlert'];

function TrainingDashboardCtrlFnt($scope, $log, comm, SweetAlert) {

	$scope.trainings = {};
	$scope.exercices = {};
	$scope.news = {};

	$scope.onSearch = function() {
		$scope.showLoading = true;

		if($scope.search != undefined){
			comm.getSearchResults($scope.search).then(
				function(data){
					//parse response to get trainings and exercices separately
					$scope.trainings = data[0];
					$scope.exercices = data[1];
					$scope.news = data[2];
					console.log($scope.news);
					$scope.showLoading = false;
				},
				function(err){
					SweetAlert.swal("Ooouups", "Unable to load trainings from server.");
					$scope.showLoading = false;
				}
			);
		}
		else {
			loadTrainings();
		}
	};

	//just to prevent duplicated code
	function loadTrainings(){
		$scope.trainings = comm.getTrainings(null).then(
			function(data){
				$scope.trainings = data;
				$scope.showLoading = false;
			},
			function(err){
				SweetAlert.swal("Ooouups", "Unable to load trainings from server.");
				$scope.showLoading = false;
			}
		);
	}

	loadTrainings();

}

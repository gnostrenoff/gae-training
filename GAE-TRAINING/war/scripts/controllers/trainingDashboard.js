'use strict';

angular.module('gaeTrainingApp').controller('TrainingDashboardCtrl',
		TrainingDashboardCtrlFnt);

TrainingDashboardCtrlFnt.$inject = ['$scope', '$log', 'comm', 'SweetAlert'];

function TrainingDashboardCtrlFnt($scope, $log, comm, SweetAlert) {

	$scope.trainings = {};

	$scope.onSearch = function() {
		$scope.showLoading = true;
		comm.getTrainings(null, $scope.search).then(
			function(data){
				$scope.trainings = data;
				$scope.showLoading = false;
				console.log($scope.training);
			},
			function(err){
				console.error(err);
				SweetAlert.swal("Ooouups", "Unable to load trainings from server.");
				$scope.showLoading = false;
			}
		);
	};

	$scope.onSearch();

}

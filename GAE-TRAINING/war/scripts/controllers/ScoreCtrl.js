'use strict';

angular.module('gaeTrainingApp').controller('ScoreCtrl',
		ScoreCtrlFnt);

ScoreCtrlFnt.$inject = [ '$scope', '$log', '$filter', 'comm', 'SweetAlert', 'factory', '$location'];

function ScoreCtrlFnt($scope, $log, $filter, comm, SweetAlert, factory, $location) {

  $scope.scores = {};

  comm.getScores().then(
		function(data){
			$scope.scores = data;
		},
		function(err){
			SweetAlert.swal("Ooouups", "Something went wrong while loading your score page");
		}
	);

}

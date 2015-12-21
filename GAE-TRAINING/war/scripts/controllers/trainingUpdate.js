'use strict';

angular.module('gaeTrainingApp').controller('TrainingUpdateCtrl',
		TrainingUpdateCtrlFnt);

TrainingUpdateCtrlFnt.$inject = [ '$scope', '$window','$log', '$location', 'comm' ];

function TrainingUpdateCtrlFnt($scope, $window, $log, $location, comm) {

	$scope.training = {};
	var trainingTitle = $location.path().split('/').pop();

	comm.getTrainings(trainingTitle, null).then(
		function(data){
			console.log(data);
			$scope.training = data;
			console.log($scope.training);
		},
		function(err){
			SweetAlert.swal("Ooouups", "Something went wrong");
		}
	);

}

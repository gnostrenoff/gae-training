'use strict';

angular.module('gaeTrainingApp').controller('ExerciceDetailsCtrl',
		ExerciceDetailsCtrlFnt);

ExerciceDetailsCtrlFnt.$inject = [ '$scope', '$log', 'comm', 'SweetAlert', 'factory'];

function ExerciceDetailsCtrlFnt($scope, $log, comm, SweetAlert, factory) {

	$scope.isLaunched = false;
	$scope.timerValue = 0;
	$scope.score = 0;

	$scope.$broadcast('timer-clear');

  $scope.startTimer = function (){
      $scope.$broadcast('timer-start');
      $scope.timerRunning = true;
			$scope.isLaunched = true;
  };

  $scope.stopTimer = function (){
      $scope.$broadcast('timer-stop');
      $scope.timerRunning = false;
  };

	$scope.clearTimer = function (){
      $scope.$broadcast('timer-reset');
  };

	//just to keep the current timer value
	$scope.$on('timer-tick', function (event, data) {
		if(data.millis == 0){
			SweetAlert.swal("Ooouups", "Time out ... retry if you want");
			$scope.clearTimer();
			$scope.stopTimer();
		}
		else
    	$scope.timerValue = data.millis/1000;
	});

	$scope.minutesToSeconds = function(time){
		var secTime = parseInt(time, 10) * 60;
		return secTime;
	}

	$scope.validate = function (){
		//stop timer
		$scope.$broadcast('timer-stop');
		$scope.timerRunning = false;

		//get score in seconds
		$scope.score = $scope.minutesToSeconds($scope.exo.time) - $scope.timerValue;

		//display success message
		SweetAlert.swal("Good job!", "You've completed the exercice \'" + $scope.exo.title +"\' in only " + parseInt($scope.score/60) + " minutes and " + $scope.score%60 + " seconds !", "success");
		$scope.clearTimer();
		$scope.stopTimer();

		//send result to server
		//todo
  };
}

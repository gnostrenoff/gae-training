'use strict';

angular.module('gaeTrainingApp').controller('MainCtrl', function($http, $scope) {

	$http({
		method : 'GET',
		url : '/welcome'
	}).then(function successCallback(response) {
		$scope.welcomeMessage = response.data;
	}, function errorCallback(error) {
		SweetAlert.swal("Ooouups", "Something went wrong. Welcome message not loaded.");
	});

});

'use strict';

angular.module('gaeTrainingApp').controller('MainCtrl', function($http, $scope) {

	$http({
		method : 'GET',
		url : '/welcome'
	}).then(function successCallback(response) {
		console.log(response);
		$scope.welcomeMessage = response.data;
	}, function errorCallback(response) {
		console.error("ERROR");
	});

});

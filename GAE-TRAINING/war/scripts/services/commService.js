'use strict';

angular.module('commService', []).service('comm',commFnc);

commFnc.$inject=['$q', '$http'];

function commFnc($q, $http){

	var comm = {
		postTraining: postTraining,
		getTrainings:getTrainings
	};

	//function post the new created training
	function postTraining(title, description){
		var deferred = $q.defer();

		var req ={
			method:'POST',
			url:'/training-search',
			headers: {'Content-Type': 'application/x-www-form-urlencoded'},
			data:$("#idNewTrainingForm").serialize()
		}

		$http(req).success(function(data, status, headers, config) {
			deferred.resolve(data);
		}).
		error(function(data, status, headers, config) {
			deferred.reject(status);
		});
		return deferred.promise;
	};

	//function post the new created training
	function getTrainings(){
		var deferred = $q.defer();

		var req ={
			method:'GET',
			url:'/training-search',
			headers: {'Content-Type': 'application/x-www-form-urlencoded'},
		}

		$http(req).success(function(data, status, headers, config) {
			deferred.resolve(data);
		}).
		error(function(data, status, headers, config) {
			deferred.reject(status);
		});
		return deferred.promise;
	};

return comm;
};

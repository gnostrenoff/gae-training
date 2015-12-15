'use strict';

angular.module('commService', []).service('comm',commFnc);

commFnc.$inject=['$q', '$http'];

function commFnc($q, $http){

	var comm = {
		postTraining: postTraining,
		postExercice: postExercice
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
	function postExercice(exercice){
		var deferred = $q.defer();

		var req ={
			method:'POST',
			url:'/exercices',
			headers: {'Content-Type': 'application/x-www-form-urlencoded'},
			data:exercice
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

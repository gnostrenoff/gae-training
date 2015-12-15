'use strict';

angular.module('commService', []).service('comm',commFnc);

commFnc.$inject=['$q', '$http'];

function commFnc($q, $http){

	var comm = {
		postTraining: postTraining,
		postExercice: postExercice,
		getTrainings: getTrainings
	};

	//function post the new created training
	function postTraining(plan){
		var deferred = $q.defer();

		var req ={
			method:'POST',
			url:'/trainings',
			headers: {'Content-Type': 'application/x-www-form-urlencoded'},
			data:plan
		}

		$http(req).success(function(data, status, headers, config) {
			deferred.resolve(data);
		}).
		error(function(data, status, headers, config) {
			deferred.reject(status);
		});
		return deferred.promise;
	};

	//function post the new created exercices
	function postExercice(exercice){
		var deferred = $q.defer();

		var req ={
			method:'POST',
			url:'/exercices',
			headers: {'Content-Type': 'application/x-www-form-urlencoded'},
			data:exercice
		}

		$http(req).success(function(data, status, headers, config) {
			console.log(data)
			deferred.resolve(data);
		}).
		error(function(data, status, headers, config) {
			deferred.reject(status);
		});
		return deferred.promise;
	};

	//function post the get all trainings
	function getTrainings(trainingId, search){

		var deferred = $q.defer();

		if(search) {
			var req = {
				method:'GET',
				url:'/trainings?search=' + search,
				headers: {'Content-Type': 'application/x-www-form-urlencoded'}
			}
		} else if (trainingId) {
			var req = {
				method:'GET',
				url:'/trainings/' + traningId,
				headers: {'Content-Type': 'application/x-www-form-urlencoded'}
			}
		} else {
			var req = {
				method:'GET',
				url:'/trainings',
				headers: {'Content-Type': 'application/x-www-form-urlencoded'}
			}
		}

		$http(req).success(function(data, status, headers, config) {
			deferred.resolve(data.data);
		}).
		error(function(data, status, headers, config) {
			deferred.reject(status);
		});
		return deferred.promise;

	};


	return comm;
};

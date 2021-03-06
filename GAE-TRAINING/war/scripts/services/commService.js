'use strict';

angular.module('commService', []).service('comm',commFnc);

commFnc.$inject=['$q', '$http'];

function commFnc($q, $http){

	var comm = {
		postTraining: postTraining,
		postExercice: postExercice,
		postScore: postScore,
		getTrainings: getTrainings,
		getExercices: getExercices,
		getSearchResults: getSearchResults,
		getScores: getScores
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

	//function post the score for the done exercices
	function postScore(score){
		var deferred = $q.defer();

		var req ={
			method:'POST',
			url:'/scores',
			headers: {'Content-Type': 'application/x-www-form-urlencoded'},
			data:score
		}

		$http(req).success(function(data, status, headers, config) {
			deferred.resolve(data);
		}).
		error(function(data, status, headers, config) {
			deferred.reject(status);
		});
		return deferred.promise;
	};

	//function post the get all trainings
	function getTrainings(trainingTitle){

		var deferred = $q.defer();

		if(trainingTitle != null){
			var req = {
				method:'GET',
				url:'/trainings?trainingTitle=' + trainingTitle,
				headers: {'Content-Type': 'application/x-www-form-urlencoded'}
			}
		}
		else {
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

	//function gets all exercices associated with a given training
	function getExercices(trainingTilte){

		var deferred = $q.defer();

		var req = {
			method:'GET',
			url:'/exercices?trainingTitle=' + trainingTilte,
			headers: {'Content-Type': 'application/x-www-form-urlencoded'}
		}

		$http(req).success(function(data, status, headers, config) {
			deferred.resolve(data.data);
		}).
		error(function(data, status, headers, config) {
			deferred.reject(status);
		});
		return deferred.promise;

	};

	//function gets all exercices associated with a given training
	function getSearchResults(searchParam){

		var deferred = $q.defer();

		var req = {
			method:'GET',
			url:'/search?search=' + searchParam,
			headers: {'Content-Type': 'application/x-www-form-urlencoded'}
		}

		$http(req).success(function(data, status, headers, config) {
			deferred.resolve(data.data);
		}).
		error(function(data, status, headers, config) {
			deferred.reject(status);
		});
		return deferred.promise;

	};

	//function gets all the user's scores
	function getScores(){

		var deferred = $q.defer();

		var req = {
			method:'GET',
			url:'/scores',
			headers: {'Content-Type': 'application/x-www-form-urlencoded'}
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

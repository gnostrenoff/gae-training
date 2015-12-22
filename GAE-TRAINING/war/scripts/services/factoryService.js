'use strict';

var contentType={}
contentType.IMG_URL="IMG_URL";
contentType.IMG_B64="IMG_B64";

angular.module('factoryServices', []).factory('factory',factoryFnc);

function factoryFnc(){

	var factory = {
		trainingCreation: trainingCreation,
		exoCreation: exoCreation,
		scoreCreation: scoreCreation,
		mapToArray: mapToArray
	};

	function trainingCreation(title,description, exerciceArray, time){

		var training = {};
		training.title = title;
		training.description = description;
		training.exercices = exerciceArray;
		training.time = time;
		return training;

	};

	function exoCreation(title,description,time){

		var exo = {};
		exo.description = description;
		exo.title = title;
		exo.time = time;
		return exo;

	};

	function scoreCreation(date, userId,trainingTitle, exoTitle, result){

		var score = {};
		score.date = date;
		score.userId = userId;
		score.trainingTitle = trainingTitle;
		score.exoTitle = exoTitle;
		score.result = result;
		return score;

	};

	function mapToArray(map){
		var contentArray=[];
		var key;
		for(key in map){
			contentArray.push(map[key]);
		}
		return contentArray;
	};

	return factory;
};

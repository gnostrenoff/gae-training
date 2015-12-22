'use strict';

var contentType={}
contentType.IMG_URL="IMG_URL";
contentType.IMG_B64="IMG_B64";

angular.module('factoryServices', []).factory('factory',factoryFnc);

function factoryFnc(){

	var factory = {
		trainingCreation: trainingCreation,
		exoCreation: exoCreation,
		mapToArray: mapToArray
	};

	function trainingCreation(title,description, exerciceArray){

		var training = {};
		training.title = title;
		training.description = description;
		training.exercices = exerciceArray;
		return training;

	};

	function exoCreation(title,description,time){

		var exo = {};
		exo.description = description;
		exo.title = title;
		exo.time = time;
		return exo;

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

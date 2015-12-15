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

	function trainingCreation(title,txt){

		var training = {};
		//todo

		return training;

	};

	function exoCreation(title,txt){

		var exo = {};
		exo.txt = txt;
		exo.title = title;

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

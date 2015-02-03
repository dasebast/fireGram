var app = angular.module('fireGram');

app.controller('picturesCtrl', function($scope, mainService) {

	$scope.pictures = mainService.returnSync();

	console.log($scope.pictures);

	$scope.reverse = false;

	$scope.pictureSubmit = function() {
		$scope.pictures.$add({url: $scope.pictureUrlInput, createdAt: new Date().toISOString()});
		// console.log($scope.pictures);
	};





}); // close app.controller
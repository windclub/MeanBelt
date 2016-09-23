angApp.controller('questionCTL', ['$scope', '$http', 'allusers', '$location', function($scope, $http, allusers, $location){
	$scope.create = function (question){
			console.log(question);
		allusers.create(function(question){
			console.log(question);
		})
	}
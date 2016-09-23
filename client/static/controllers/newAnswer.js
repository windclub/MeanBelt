angApp.controller('answerCTL', ['$scope', '$http', 'allusers', '$location', function($scope, $http, allusers, $location){
	$scope.create = function (answer){
			console.log(answer;
		allusers.create(function(answer){
			console.log(answer);
		})
	}
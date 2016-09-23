angApp.controller('newUser', ['$scope', '$http', 'allusers', '$location', function($scope, $http, allusers, $location){
	$scope.create = function (user){
			console.log(user);
		allusers.create(function(user){
			console.log(user);
		})
	}
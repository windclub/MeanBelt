var mongoose = require('mongoose');
var User = mongoose.model('Users');
var question = mongoose.model('Questions')
var answer = mongoose.model('Answers')


module.exports = {
	get: function(req, res){
		console.log("/create, POST")
		var user = new User(req.body);
		user.save(function(err){
			console.log("Welcome new user");
			if(err){
				res.status(401).send("please enter a user name")
			}else{	
				res.status(200);
			}
		}
	)},
	getAll: function(req, res){}
}



// angApp.controller('newUsers', ['$scope', '$http', 'allUsers', '$location', function($scope, $http,allUsers, $location){
// 	$scope.create = function (user){
// 			console.log(user);
// 		allUsers.create(function(user){
// 			console.log(user);
// 		})
// 	}
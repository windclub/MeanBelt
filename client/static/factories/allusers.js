angApp.factory("allusers", ["$http", function($http){
		

	return {
		create: function(user, callback){
			$http({
				method:"POST",
				url: "/newUser",
				data: user	
			}).then(function(user){
				callback();
			})
		},


}}]);


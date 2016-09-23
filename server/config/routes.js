var users = require('../controllers/BErequest.js');
module.exports = function(app){

	app.post('/newUser', function(req, res){
		console.log(req.body);
		res.sendStatus(400);
		})
	}

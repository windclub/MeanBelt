var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
	name: String	  
});

mongoose.model('Users', UserSchema);


var QuestionSchema = new mongoose.Schema({
	question: String,
	description: String

});

mongoose.model('Questions', QuestionSchema);


var AnswerSchema = new mongoose.Schema({
	Answer: String,
	detail: String
});

mongoose.model('Answers', AnswerSchema);
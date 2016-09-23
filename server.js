var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session');

var app = express();

app.use(express.static(path.join(__dirname,'client', 'static')))

require('./server/config/mongoose.js');
// require('./server/config/routes.js')(app);

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json({extended:true}))

var hash = {
 secret:'CookieMonster', 
 resave:false, 
 saveUninitialized: true,
 cookie: {
  secure: false, 
  httpOnly:false, 
  maxAge: 3600000
 }
}

app.use(session(hash));

app.listen(8000, function(){
	console.log("please show 8000 when logged in");

})
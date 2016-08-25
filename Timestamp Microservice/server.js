var express = require('express');
var app = express();
var api = require('./api/timestamp.js');

app.use(express.static('public'));

api(app);

app.listen('8080',function(){
	console.log("server is listening 8080 port");
});

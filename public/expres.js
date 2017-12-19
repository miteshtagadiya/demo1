var express = require('express');

var app = express();

app.get('/',function(req,res){
	res.send('Home Page');
});

app.get('/contact', function(req,res){
	res.send('Contact Page');
});

app.get('/profile/:id',function(req,res){
	res.send('Profile of Id: ' + req.params.id);
});

app.listen(3000);
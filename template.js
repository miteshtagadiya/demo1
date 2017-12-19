var express = require('express');
var bodyParser = require('body-parser');
var app = express();

//middleware
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('view engine','ejs');

//whenever application is runs this middleware is called.
app.use('/assets',express.static('assets'));
/*app.use('/assets',function(req,res,next){
	console.log(req.url);
	next();
});
*/
app.get('/',function(req,res){
	//res.sendFile(__dirname + '/index.html');
	res.render('index');
});

app.get('/contact', function(req,res){
	//res.sendFile(__dirname + '/contact.html');
	
	//for display queryString 
	console.log(req.query);
	res.render('contact',{qs: req.query});
});

app.post('/contact', urlencodedParser, function(req,res){
	console.log(req.body);
	res.render('contact-sucess',{data: req.body});
});

app.get('/profile/:id',function(req,res){
	var data = {age:29 , job: 'ninja', hobbies: ['eating','fighting','Music']};
	res.render('profile',{ person: req.params.id,data: data});
});

app.listen(3000);
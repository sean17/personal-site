var express = require('express'),
	path	= require('path'),
	app		= express(),
	port	= 80
	;

app.use(express.static('public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


if(process.argv[2]==='dev')
{
	port = 8080;
	app.get('/new/index', function(req, res, next)
	{
		res.render('new/index');
	});
}

// app.render('howdy');
app.get('/', function(req, res, next)
{
	res.render('index');
});
app.get('/experiments/background', function(req, res, next)
{
	res.render('experiments/background');
});
app.listen(port);

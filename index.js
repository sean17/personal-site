var express = require('express'),
	path	= require('path'),
	app		= express(),
	routes	= require('./routes/index'),
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

app.get('/blog', routes.blog)
app.get('/', function(req, res, next)
{
	res.render('index');
});
app.get('/projects', function(req, res, next)
{
	res.render('projects');
});
app.get('/wideRight', function(req, res, next)
{
	res.render('wide-right');
});
app.get('/experiments/:file', function(req, res, next)
{
	res.render('experiments/'+req.params.file);
});

app.get('/experiments', routes.experiments);
app.listen(port);

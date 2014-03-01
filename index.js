var express = require('express'),
	path	= require('path'),
	app		= express(),
	fs		= require('fs'),
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
app.get('/test', function(req, res, next)
{
	res.render('test');
});
app.get('/experiments/:file', function(req, res, next)
{
	res.render('experiments/'+req.params.file);
});

app.get('/experiments', function(req, res, next)
{
	fs.readdir(path.join(__dirname, 'views/experiments'), function(err, files)
	{
		if(err)
			console.log(err);
		if(files)
		{
			res.render('experiments',
	        {
	            title: 'experiments',
	            list: JSON.stringify(files)
	        });
		}
	});
});
app.listen(port);

var express = require('express'),
	path	= require('path')
	;
var app = express();


app.use(express.static('public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


// app.render('howdy');
app.get('/', function(req, res, next)
{
	res.render('index');
});
app.listen(8080);
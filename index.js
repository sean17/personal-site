var restify = require('restify')//,
	// routes	= require('./routes');

var server = restify.createServer();

server.get(/.*/, restify.serveStatic({
  directory: './public',
  default: 'index.html'
}));


server.listen(8080);

/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var mongoose = require('mongoose');
var MongoStore = require('connect-mongo')(express);
var flash = require('connect-flash');
var routes = require('./config/routes');
var settings = require('./config/settings');

var app = express();

var connect = function (){

	var url = 'mongodb://' + settings.host + '/' +settings.db;
	mongoose.connect(url);

};

connect();


// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser());
app.use(express.session({
	secret: 'ublog',
	cookie: {maxAge: 1000 * 60 * 60 * 24 * 30},
	store: new MongoStore({
		db: settings.db,
		host: settings.host
	})
}));
app.use(flash());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

routes(app);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

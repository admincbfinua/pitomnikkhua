var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fileUpload = require('express-fileupload');
var fs = require('fs');
var xssFilters = require('xss-filters');


var session =  require('express-session');
var mongoose =  require('./libs/mng');
var MongoStore = require('connect-mongo/es5')(session);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var index = require('./routes/index');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(fileUpload());

app.use(session({
	secret:'sekretofthis',
	key:'sid',
	cookie:{path:"/",
			httpOnly:true,
			maxAge:null
	},
	store:new MongoStore({mongooseConnection:db})
}));
app.use(require('./middleware/loadAdmin'));
app.use(require('./middleware/loadUser'));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

var express = require('express'),
  stylus = require('stylus'),
  logger = require('morgan'),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser');


var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

function compile(str, path) {
  return stylus(str).set('filename', path);
}

app.set('views', __dirname + '/server/views');
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(bodyParser());
app.use(stylus.middleware(
  {
    src: __dirname + '/public',
    compile: compile
  }
));

app.use(express.static(__dirname + '/public'));
if(env === 'development') {
  mongoose.connect('mongodb://localhost/projectboard');
} else {
  mongoose.connect('mongodb://ally:liberty@ds063330.mongolab.com:63330/heroku_app19803277');
}
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error...'));
db.once('open', function callback() {
  console.log('projectboard db opened');
});

/* var messageSchema = mongoose.Schema({message: String});
var Message = mongoose.model('Message', messageSchema);
var mongoMessage;
Message.findOne().exec(function(err, messageDoc) {
  mongoMessage = messageDoc.message;
}); */

app.get('/partials/:partialPath', function(req, res) {
  res.render('partials/' + req.params.partialPath);
});

app.get('*', function(req, res){
  res.render('index', {});
});

var port = process.env.PORT || 3030;
app.listen(port, function() {
  console.log('Listening on port '+port);
});

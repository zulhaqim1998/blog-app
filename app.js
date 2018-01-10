var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var path = require('path');
var route = require('./routes/route');

mongoose.connect('mongodb://localhost:27017/blog-posts');
mongoose.connection.on('connected', function(){
  console.log('Connected to database: MongoDB');
});
mongoose.connection.on('error', function(err){
  console.log('Error connecting to database: ' + err);
});

app.use(bodyParser.urlencoded({ 'extended': 'true' }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use('/api', route);
app.use(express.static(path.join(__dirname, 'public')));

app.get('*', function(req, res){
  res.sendFile('./public/index.html');
});

app.listen(3000, function(){
  console.log('Server started at: http://localhost:3000');
});

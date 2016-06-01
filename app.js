var express = require('express');
var path = require('path');
var morgan = require('morgan');

var app = express();

app.use(morgan('combined'));
app.use(express.static('public'));
app.use('/lib', express.static(__dirname + '/lib'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname+'/public/index.html'));
});

app.listen(3000, function() {
  console.log('listening!');
});

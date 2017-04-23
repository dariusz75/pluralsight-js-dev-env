import express from 'express';
import path from 'path';
import open from 'open';

var port = 3000;
var app = express();

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(error) {
  if (error) {
    console.log(error)
  } else {
    open('http://localhost:' + port);
  }
});

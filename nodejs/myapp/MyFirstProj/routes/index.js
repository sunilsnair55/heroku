var express = require('express');
var router = express.Router();
var app = express();

app.get('/', function (req, res) {
  res.send('This is rubbish');
});
app.post('/', function (req, res) {
  res.send('Got a POST request');
});

// node index.js

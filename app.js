var applescript = require('applescript');
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

var macKeyCode = {
    left:   123,
    right:  124,
};

app.post('/prev', function(req, res) {
  applescript.execString('tell application "System Events" to key code ' + macKeyCode.left, function(){});
  res.json({});
});

app.post('/next', function(req, res) {
  applescript.execString('tell application "System Events" to key code ' + macKeyCode.right, function(){});
  res.json({});
});

app.listen(8888);
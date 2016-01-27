var express = require('express');
var app = express();
var path = require('path');
var port = Number(process.env.PORT || 3000);

app.use(express.static(__dirname +'/app'));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + 'app/index.html'));
});

app.listen(3000, function(){
  console.log('Running on port '+port);
});

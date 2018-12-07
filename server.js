var express = require('express');
var app = express();
const port = 3000;

app.get('/Ping', function(req,res){

    res.send('PONG');
});

app.listen(port);
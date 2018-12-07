var express = require('express');
var app = express();
const port = 3000;
var count = 0;

app.post('/increment', function(req,res){
    count++;
    res.send(`count: ${count}`);
});



app.post('/decrement', function(req,res){
    count--;
    res.send(`count: ${count}`);
});



app.get('/value', function(req,res){
    count;
    res.send(`count: ${count}`);
});

app.listen(port);




var express = require('express');

var app = new express();

app.get('/', (req, res) => {
    res.render('./../app/index.ejs',{});
}).listen(7777);
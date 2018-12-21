var express = require('express'),
    app = express(),
    port = process.env.PORT || 8000,
    bodyParse = require('body-parser'),
    controller = require('./model/controller');
app.use(bodyParse.urlencoded({extended:true}));
app.use(bodyParse.json());

var routes = require('./router/routes');
routes(app);

app.listen(port);
console.log('Learn Node JS with kiddy, RESTful API server started on:'+port);

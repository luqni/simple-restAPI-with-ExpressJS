var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//var routes = require('./router/routes');
//routes(app);
var customerRoute = require('./router/routes-customer');
customerRoute(app);
var accountRoute = require('./router/routes-account');
accountRoute(app);

app.listen(port);
console.log('Learn Node JS With Kiddy, RESTful API server started on: ' + port);

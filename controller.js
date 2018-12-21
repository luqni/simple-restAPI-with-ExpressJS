'user strict';

var response = require('./res');
var connection = require('./conn');

exports.customers = function(req, res){
    connection.query('SELECT * FROM customer', function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.index = function(req, res){
    response.ok("Hello from the Node JS RESTful side!", res)
};

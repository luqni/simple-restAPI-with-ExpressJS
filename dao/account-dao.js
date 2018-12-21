var connection = require('../db/conn');

const sqlGetAll = "SELECT * FROM account";
const sqlGetById = "SELECT * FROM account WHERE accountnumber =?";

exports.getById = function getById(id, callback){
    connection.query(sqlGetById,id, function (error, rows){
        if(error){
            console.log(error);
            return callback(error);
        }
        callback(null, rows[0]);
    });
};

exports.getAll = function getAll(callback){
    connection.query(sqlGetAll, function (error, rows){
        if(error){
            console.log(error);
            return callback(error);
        } else{
            callback (null, rows);
        }
    });
};
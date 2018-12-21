var response = require ('../model/res');
var accountDao = require ('../dao/account-dao');

exports.accounts = function(req, res) {
    accountDao.getAll(function(error, rows){
        if(error){
            console.log('error while select :'+error);
            response.err(error, res);
        }else{
            response.ok(rows, res);
        }
    });
};
exports.getAccountrById = function(req, res) {
    accountDao.getById(req.params['id'], function(err, data){
        if(err){
            console.log('error call getById : '+err);
            response.err(err, res);
        } 
        response.ok(data, res);
    });

};
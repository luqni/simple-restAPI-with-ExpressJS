module.exports = function(app){
    var controller = require('../controller/account-controller');

    app.route('/accounts').get(controller.accounts);
    app.route('/account/:id').get(controller.getAccountrById);
}
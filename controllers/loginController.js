let users = require('../db/users');

class LoginController {
    renderLogin (req, res) {
        res.render('login');
    }

    postUser (req, res) {
        users = {...req.body, id: users.length ? users[users.length - 1].id + 1 : 1};
        res.redirect('/users', {users});
    }
}

module.exports = new LoginController();
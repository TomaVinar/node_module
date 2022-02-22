let users = require('../db/users');

class SignInController {
    getSignIn (req, res) {
        res.render('sign');
    }
    getCurrentUser (req, res) {
        res.redirect('/user')
    }
}

module.exports = new SignInController();
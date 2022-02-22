let users = require('../db/users');

class SignInController {
    getSignIn (req, res) {
        res.render('sign');
    };
    getUser ({user}, res) {
        res.redirect(`/users/${user.id}`, {user});
    }
}

module.exports = new SignInController();
const users = require('../db/users');

function isUserAlreadyExist(req, res, next) {

    const user = users.find(value => value.email === req.body.email);

    try {
        if (!user) {
            throw new Error('User with this email is not exist');
        }
        if (user) {
            res.redirect(`/users/${user.id}`, {user});
        }
        next();

    } catch ({message}) {
        res.redirect(`/error?error=${message}`);
    }
}

module.exports = isUserAlreadyExist;
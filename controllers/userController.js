const users = require('../db/users')

class UserController {
    getCurrentUser(req, res) {
        const {id} = req.params;
        const currentUser = users.find(value => value.id === req.body.id);
        res.redirect('/user', {currentUser});
    }
}

module.exports = new UserController();
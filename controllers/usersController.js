let users = require('../db/users');

class UsersController {
    renderUsers(req, res) {
        if (Object.keys(req.query).length) {
            let usersArr = [...users];
            if (req.query.city) {
                usersArr = usersArr.filter(user => user.city === req.query.city);
            }
            if (req.query.age) {
                usersArr = usersArr.filter(user => user.age === +req.query.age);
            }
            res.render('users', {users: usersArr});
        }
        res.render('users', {users})
    };

    getUserById(req, res) {
        try {
            const user = users.find(value => value.id === req.params.id);
            if (!user) {
                throw new Error(`User with this ${req.params.id} does not exist`);
            }
            res.render (`users/${user.id}`, {user});

        }catch ({message}) {
            res.redirect (`/error?error=${message}`);
        }
    };

    deleteUserById(req, res) {
        const newUsers = users.filter(value => value.id !== +req.params.id);
        res.redirect('/users', {newUsers});
    }
}

module.exports = new UsersController();
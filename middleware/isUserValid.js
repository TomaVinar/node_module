const users = require('../db/users');

function isUserValid(req, res, next) {
    const {firstName, lastName, age, city, email, password} = req.body;

    try {
        if (!firstName || !lastName || !age || !city || !email || !password) {
            throw new Error('It is necessary to fill in all fields');
        }

        if (firstName || lastName || age || city || email || password) {
            users.push(req.body);
        }
        next();
    }
    catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = isUserValid;
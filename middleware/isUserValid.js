const users = require('../db/users');

function isUserValid(req, res, next) {
    try {
        const {firstName, lastName, age, city, email, password} = req.body;

        if (!firstName || !lastName || !age || !city || !email || !password) {
            throw new Error('It is necessary to fill in all fields');
        }

        next();
    }
    catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = isUserValid;
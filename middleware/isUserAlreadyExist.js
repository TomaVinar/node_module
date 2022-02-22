const users = require('../db/users');

module.exports = {
    checkUser: (req, res, next) => {
        try {
            const user = users.find(value => value.id === +req.params.id);

            if (!user) {
                throw new Error('User with this ID is not exist');
            }

            req.user = user;
            next();
        } catch ({message}) {
            res.redirect(`/error?error=${message}`);
        }
    },
    checkUserEmail: (req, res, next) => {
      try {
          const user = users.find(value => value.email === req.body.email);

          if (!user) {
              throw new Error('User with this email is not exist');
          }

          req.user = user;
          next();
      }catch ({message}) {
          res.redirect(`/error?error=${message}`);
      }
    }
}
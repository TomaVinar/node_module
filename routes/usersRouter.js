const {Router} = require('express');

const userMiddleware = require('../middleware/isUserAlreadyExist');

const usersController = require('../controllers/usersController')

const usersRouter = Router();

usersRouter.get('/', usersController.renderUsers);

usersRouter.get('/:id', userMiddleware, usersController.getUserById);
usersRouter.post('/:id', usersController.deleteUserById);

module.exports = usersRouter;
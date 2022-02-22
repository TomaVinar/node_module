const {Router} = require('express');

const userController = require('../controllers/userController')

const userRouter = Router();

userRouter.get('/:id', userController.getCurrentUser);

module.exports = userRouter;
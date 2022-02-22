const {Router} = require('express');

const signInController = require('../controllers/signInController');
const signInMiddleware = require('../middleware/isUserAlreadyExist');

const signInRouter = Router();

signInRouter.get('/', signInController.getSignIn);
signInRouter.post('/', signInMiddleware.checkUserEmail, signInController.getCurrentUser);

module.exports = signInRouter;

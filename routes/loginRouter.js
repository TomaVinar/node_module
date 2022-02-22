const {Router} = require('express');

const loginMiddleware = require('../middleware/isUserValid');
const loginController = require('../controllers/loginController');

const loginRouter = Router();

loginRouter.get('/', loginController.renderLogin);
loginRouter.post('/', loginMiddleware, loginController.postUser);

module.exports = loginRouter;
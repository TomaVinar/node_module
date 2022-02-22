const {Router} = require('express');

const usersRouter = require('./usersRouter');
const loginRouter = require('./loginRouter');
const signInRouter = require('./signInRouter');

const apiRoutes = Router();

apiRoutes.use('/users', usersRouter);
apiRoutes.use('/login', loginRouter);
apiRoutes.use('/sign', signInRouter);

apiRoutes.get('/error', ({query}, res) => {
    res.render('error', {error: query.error});
});

apiRoutes.use((req, res)=> {
    res.render('notFoundPage')
})


module.exports = apiRoutes;
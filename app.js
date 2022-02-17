const express = require('express');
const {engine} = require('express-handlebars');
const path = require('path');
const {check} = require('express-validator');
const {handle} = require('express/lib/router');
const queryString = require('querystring');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'static')));
app.set('view engine', '.hbs');
app.engine('.hbs', engine({defaultLayout: false}));
app.set('views', path.join(__dirname, 'static'));

const users = [
    {firsName: 'Ivan', lastName: 'Ivanov', age: 34, city: 'Kyiv', email: 'pole@ukr.net', password: 'mweoiur834r'},
    {firsName: 'Ivan', lastName: 'Ivanov', age: 34, city: 'Lviv', email: 'lis@ukr.net', password: 'mweoiur834r'},
    {firsName: 'Ivan', lastName: 'Ivanov', age: 34, city: 'Dnipro', email: 'soloma@ukr.net', password: 'mweoiur834r'}
];

app.get('/login', (req, res) => {
    res.render('login', {qs: req.query})
})

app.get('/users', (req, res) => {
    res.render('users', {users})
});

// app.post('/login', check('email').custom(value => {
//         return users.map(user => user).find(email => {
//             if (email === value) {
//                 console.log('Error')
//             }
//         })
//     }),
//     (req, res) => {
//         users.push(req.body)
//         res.redirect('/users')
//     }
// )

// app.get('/users/:id', (req, res) => {
//     const {id} = req.params;
//     const {city} = req.query
//     res.json(users[id]);
// });

app.use((req, res) => {
    res.render('pageNotFound')
})

app.listen(5000, () => {
    console.log('Server is working!');
});


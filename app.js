const express = require('express');
const {engine} = require('express-handlebars');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'static')));
app.set('view engine', '.hbs');
app.engine('.hbs', engine({defaultLayout: false}));
app.set('views', path.join(__dirname, 'static'));

let error = '';


let users = [
    {
        id: 1,
        firsName: 'Ivan',
        lastName: 'Ivanov',
        age: 34,
        city: 'Kyiv',
        email: 'pole@ukr.net',
        password: 'mweoiur834r'
    },
    {id: 2, firsName: 'Ivan', lastName: 'Ivanov', age: 34, city: 'Lviv', email: 'lis@ukr.net', password: 'mweoiur834r'},
    {
        id: 3,
        firsName: 'Ivan',
        lastName: 'Ivanov',
        age: 28,
        city: 'Lviv',
        email: 'allseason1988@ukr.net',
        password: 'mweoiur834r'
    },
    {
        id: 4,
        firsName: 'Ivan',
        lastName: 'Ivanov',
        age: 34,
        city: 'Dnipro',
        email: 'soloma@ukr.net',
        password: 'mweoiur834r'
    }
];

app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/login', (req, res) => {
    const userEmail = users.find(value => value.email === req.body.email);
    if (userEmail) {
        error = "User with this email already exist";
        res.redirect('/error');
    }
    users.push({...req.body, id: users[users.length - 1].id + 1});
    res.redirect('users');
});

app.get('/users', ({query}, res) => {
    if (Object.keys(query).length) {
        let usersArr = [...users];
        if (query.city) {
            usersArr = usersArr.filter(user => user.city === query.city);
        }
        if (query.age) {
            usersArr = usersArr.filter(user => user.age === +query.age);
        }
        res.render('users', {users: usersArr});
    }
    res.render('users', {users});
});

app.get('/users/:id', (req, res) => {
    const {id} = req.params;
    const userId = users.find(value => value.id === +req.params.id);
    if (!userId) {
        error = 'User is not found';
        res.redirect('/error');
        return;
    }
    res.render('user', {user: userId});
});

app.post('/users/:id', (req, res) => {
    users = users.filter(value => value.id !== +req.params.id);
    res.redirect('/users');
});

app.get('/sign', (req, res) => {
    res.render('sign');
});

app.post('/sign', (req, res) => {
    const user = users.find(value => value.email === req.body.email && value.password === req.body.password);
    if (!user) {
        error = 'Wrong password or email';
        res.redirect('/error');
        return;
    }
    res.redirect(`/users/${user.id}`);
});

app.get('/error', (req, res) => {
    res.render('error', {error});
});

app.use((req, res) => {
    res.render('pageNotFound');
})

app.listen(5000, () => {
    console.log('Server is working!');
});


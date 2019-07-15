var express = require('express');
var router = express.Router();
const users = require('../controllers/user.controller.js');
var VerifyToken = require('../auth/VerifyToken');


// define a simple route
router.get('/', (req, res) => {
    res.render('landing');
});

router.get('/auth/register', function(req, res) {
    res.render('register', {user: res.locals.user});
}); 

// CREATES A NEW USER
router.post('/auth/register', users.create); 

router.get('/auth/login', function(req, res){
    res.render('login', {error: res.locals.errors});
});

// LOGIN USER
router.post('/login', users.login, function(req, res){
    if(res.locals.errors !== null){
         res.redirect('/users/auth/login/')  
    } else{
    res.redirect('../notes');
    }
});

// RETURNS ALL THE USERS IN THE DATABASE
router.get('/', users.getAll);

// GETS A SINGLE USER FROM THE DATABASE
router.get('/:id', users.getOne);

// GETS CURRENT USER
router.get('/auth/me', VerifyToken,  users.getCurrentUser);

// DELETES A USER FROM THE DATABASE
router.delete('/:id', users.delete);

// UPDATES A SINGLE USER IN THE DATABASE
router.put('/:id', users.update);

// LOGOUT USER
router.get('/auth/logout', users.logout, function(req, res){
    res.render('login');
});

module.exports = router;
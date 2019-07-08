var express = require('express');
var router = express.Router();
const users = require('../controllers/user.controller.js');
var VerifyToken = require('../auth/VerifyToken');

// CREATES A NEW USER
router.post('/register', users.create); 

// LOGIN USER
router.post('/login', users.login);
router.get('/login', function(req, res){
    res.render('login');
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
router.get('/logout', users.logout);

module.exports = router;
var express = require('express');
var router = express.Router();
const users = require('../controllers/user.controller.js');
var VerifyToken = require('../auth/VerifyToken');


router.get('/register', function(req, res) {
    res.render('register');
}); 

// CREATES A NEW USER
router.post('/register', users.create); 

router.get('login', function(req, res){
    res.render('login');
});

// LOGIN USER
<<<<<<< HEAD
router.post('/login', users.login);
router.get('/login', function(req, res){
    res.render('login');
});
=======
router.post('/login', users.login, function(req, res){
    console.log(req.cookies)
    res.redirect('../notes');
});

>>>>>>> b0f53ed6ac2fb25aedf04f860ec04337388b4565
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
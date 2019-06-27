var express = require('express');
var router = express.Router();
const users = require('../controllers/user.controller.js');

// CREATES A NEW USER
router.post('/', users.create); 

// RETURNS ALL THE USERS IN THE DATABASE
router.get('/', users.getAll);

// GETS A SINGLE USER FROM THE DATABASE
router.get('/:id', users.getOne);

// DELETES A USER FROM THE DATABASE
router.delete('/:id', users.delete);

// UPDATES A SINGLE USER IN THE DATABASE
router.put('/:id', users.update);


module.exports = router;

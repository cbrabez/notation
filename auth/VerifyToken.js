var jwt = require('jsonwebtoken');
var config = require('../config');
var User = require('../models/user.model');

function verifyToken(req, res, next) {
  //var token = req.headers['x-access-token'];
  var token = req.cookies.token;
  if (!token)
    return res.status(403).send({ auth: false, message: 'No token provided.' });
    
  jwt.verify(token, config.secret, function(err, decoded) {
    if (err)
    return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    // if everything good, save to request for use in other routes
    req.userId = decoded.id;
    User.findById(req.userId, function(err, user){
      res.locals.user = user;
    }); 
    next();
  });
}

module.exports = verifyToken;
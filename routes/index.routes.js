var express = require('express');
var router = express.Router();

// define a simple route
router.get('/', (req, res) => {
    res.render('landing');
});


module.exports = router;
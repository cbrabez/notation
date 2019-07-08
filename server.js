const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");


// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())
app.use(cookieParser());

// DEFINE VIEW ENGINE 
app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));

// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

// define a simple route
app.get('/', (req, res) => {
    res.render('login');
});

// Require Notes routes
require('./routes/note.routes.js')(app);
var userRoutes = require('./routes/user.routes.js');

app.use('/users', userRoutes);

// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});

module.exports = app;
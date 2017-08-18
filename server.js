// IMPORTS
require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser'); 
const http = require('http');
const server = http.createServer(app);
const port = process.env.PORT || '3000';
const logger = require('morgan');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');

const tone_analyzer = new ToneAnalyzerV3({
  username: process.env.TONE_ANALYZER_USERNAME,
  password: process.env.TONE_ANALYZER_PASSWORD,
  version_date: '2016-05-19'
});

// import mongoose
const mongoose = require('mongoose');

// default Promise implementation
mongoose.Promise = global.Promise;

// import model
const Search = require('./models/search');
const User = require('./models/user');

// =============================================================

/*
* ESTABLISH CONNECTION WITH MONGO
*/

const db = mongoose.connection;

if(process.env.NODE_ENV !== 'test'){
    mongoose.connect('mongodb://localhost/emotrr', {
        useMongoClient: true,
        /* other options */
    });

    db.on('error', error => console.warn('Warning', error));
    db.once('open', () => console.log('Connected to MongoDB!'));
}

// =============================================================

/*
* MIDDLEWARE
*/

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// CORS
app.all('/*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// SECURITY
app.disable('x-powered-by');

// =============================================================

/*
* ROUTES
*/

app.get('/', (req, res, next) => {
    res.send('Hello World');
});

// get all tweets
app.get('/tweets', (req, res, next) => {
    Search.find({}, (err, tweets) => {
        if (err) console.log(err);

        res.status(200).json({ tweets });
    });
});

// delete a tweet
app.delete('/tweets/delete/:id', (req, res, next) => {
    Search.findByIdAndRemove(req.params.id)
        .then(() => {
            Search.find({}, (err, tweets) => {
                if (err) console.log(err);

                res.status().json({ success: true, msg: 'Tweet deleted', tweets });
            });
        });
});


// =============================================================

/*
* START SERVER
*/

app.set('port', port);
server.listen(port);
console.log('Server listening on port ' + port);

// =============================================================

/*
* MIDDLEWARE FOR HANDLING ERRORS
*/

app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.status || 500).send(err.stack);
});

// =============================================================

module.exports = app;
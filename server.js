require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser'); 
const http = require('http');
const server = http.createServer(app);
const port = process.env.PORT || '3000';
const logger = require('morgan');

const index = require('./routes/indexRoutes');

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

// ROUTES
// index(app);

/*
* START SERVER
*/

app.set('port', port);
server.listen(port);
console.log('Server listening on port ' + port);

// ERROR HANDLER
app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.status || 500).send(err.stack);
});

// EXPORT APP
module.exports = app;
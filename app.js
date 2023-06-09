var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var nounsRouter = require('./routes/nouns');
var adjectivesRouter = require('./routes/adjectives');
var verbsRouter = require('./routes/verbs');
var expressionsRouter = require('./routes/expressions');
const cors = require('cors'); // add at the top
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/', nounsRouter);
app.use('/api/', adjectivesRouter);
app.use('/api/', verbsRouter);
app.use('/api/', expressionsRouter);
app.use(cors()); // add after 'app' is created



module.exports = app;

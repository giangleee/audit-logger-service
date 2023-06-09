require('dotenv-expand').expand(require('dotenv').config())

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')
const errorHandler = require('./middlewares/handle-error');

const indexRouter = require('../src/routes');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

app.use('/api/v1', indexRouter);

app.use(errorHandler);

module.exports = app;

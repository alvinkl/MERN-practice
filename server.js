'use strict'
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

const app = express();
const router = require('./router');

const port = process.env.API_PORT || process.env.PORT;

// mongoose.connect(process.env.MONGO_DB);
mongoose.connect("mongodb://admin:admin@ds139909.mlab.com:39909/mern-pr");
mongoose.Promise = Promise;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

app.use('/api', router);

app.listen(port, console.log(`api running on port ${port}`));

'use strict'
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

const app = express();
const router = require('./router');

const port = process.env.API_PORT || process.env.PORT;

// mongoose.connect(process.env.MONGO_DB);
mongoose.connect("mongodb://admin:admin@ds139909.mlab.com:39909/mern-pr");
mongoose.Promise = Promise;

require('./config/passport');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({
  secret: 'mysupersecret',
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({ mongooseConnection: mongoose.connection }),
  cookie: { maxAge: 180 * 60 * 1000 }
}));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  // placeholder for custom user serialization
  // null is for errors
  done(null, user);
});

passport.deserializeUser((user, done) => {
  // placeholder for custom user deserialization.
  // maybe you are going to get the user from mongo by id?
  // null is for errors
  done(null, user);
});

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

  res.setHeader('Cache-Control', 'no-cache');
  next();
});

// we will call this to start the GitHub Login process
app.get('/auth/twitter', passport.authenticate('twitter'));

// GitHub will call this URL
app.get('/auth/twitter/callback', passport.authenticate('twitter', { failureRedirect: '/' }),
  function(req, res) {
    res.redirect('/');
  }
);

app.use('/api', router);

app.listen(port, console.log(`api running on port ${port}`));

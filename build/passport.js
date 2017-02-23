'use strict';

var TwitterStrategy = require('passport-twitter').Strategy;
var passport = require('passport');

var configAuth = require('./auth');
var User = require('../model/User');

passport.use(new TwitterStrategy({
  consumerKey: configAuth.twitterAuth.consumerKey,
  consumerSecret: configAuth.twitterAuth.consumerSecret,
  callbackUrl: configAuth.twitterAuth.callbackURL
}, function (token, tokenSecret, profile, done) {
  process.nextTick(function () {
    User.findOne({ 'id': profile.id }, function (err, user) {
      if (err) return done(err);

      if (user) return done(null, user);else {
        (function () {
          var newUser = new User();
          newUser.id = profile.id;
          newUser.username = profile.username;
          newUser.displayName = profile.displayName;

          newUser.save(function (err) {
            if (err) throw err;
            return done(null, newUser);
          });
        })();
      }
    });
  });
}));
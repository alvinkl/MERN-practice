const TwitterStrategy = require('passport-twitter').Strategy;
const passport = require('passport');

const configAuth = require('./auth');
const User = require('../model/User');

passport.use(new TwitterStrategy({
  consumerKey: configAuth.twitterAuth.consumerKey,
  consumerSecret: configAuth.twitterAuth.consumerSecret,
  callbackUrl: configAuth.twitterAuth.callbackURL
},
  (token, tokenSecret, profile, done) => {
    process.nextTick(() => {
      User.findOne({ 'id': profile.id }, (err, user) => {
        if (err) return done(err);
        
        if (user) return done(null, user);
        else {
          let newUser = new User();
          newUser.id = profile.id;
          newUser.username = profile.username;
          newUser.displayName = profile.displayName;

          newUser.save(err => {
            if (err) throw err;
            return done(null, newUser);
          })
        }
      });
    })
  }
))
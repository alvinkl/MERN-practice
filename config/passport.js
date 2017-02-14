const TwitterStrategy = require('passport-twitter').Strategy;
const passport = require('passport');
// // const User = require('../model/User');
const configAuth = require('./auth');

// module.exports = (passport) => {
//   passport.serializeUser((user, done) => {
//     // done(null, user.id);
//   });

//   passport.deserializeUser((id, done) => {
//     // User.findById(id, (err, user) => {
//     //   done(err, user);
//     // })
//   });

//   passport.use(new TwitterStrategy({
//     consumerKey: configAuth.twitterAuth.consumerKey,
//     consumerSecret: configAuth.twitterAuth.consumerSecret,
//     callbackUrl: configAuth.twitterAuth.callbackURL
//   },
//   (token, tokenSecret, profile, done) => {
//     process.nextTick(() => {
//       User.findOne({ 'twitter.id': profile.id }, (err, user) => {
//         if (err) return done(err);
        
//         if (user) {
//           return done(null, user);
//         }
//         else {
//           var newUser = new User();

//           newUser.twitter.id = profile.id;
//           newUser.twitter.token = token;
//           newUser.twitter.username = profile.username;
//           newUser.twitter.displayName = profile.displayName;

//           newUser.save(err => {
//             if (err) throw err;
//             return done(nulll, newUser);
//           })
//         }
//       })
//     })
//   })
//   )
// }

passport.use(new TwitterStrategy({
  consumerKey: configAuth.twitterAuth.consumerKey,
  consumerSecret: configAuth.twitterAuth.consumerSecret,
  callbackUrl: configAuth.twitterAuth.callbackURL
},
  (accessToken, refreshToken, profile, done) => {
    return done(null, profile);
  }
))
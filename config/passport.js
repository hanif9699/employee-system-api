const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User=require('../dao/user');
const customFields = {
    usernameField: 'email',
    passwordField: 'password',
    // passReqToCallback: true
}

passport.use(new LocalStrategy(customFields,
    function(username, password, done) {
      User.findOne({ email: username }, function (err, user) {
        // console.log('passpoert',user)
        if (err) { return done(err); }
        if (!user) {
          return done(null, false, { message: 'User doesnt exist' });
        }
        if (!user.verifyPassword(password)) {
          return done(null, false, { message: 'Incorrect password' });
        }
        return done(null, user);
      });
    }
  ));

passport.serializeUser((user, done) => {
    // console.log(user)
    done(null, user.user_id);
});

passport.deserializeUser((userId, done) => {
    User.findById(userId)
        .then((user) => {
            done(null, user);
        })
        .catch(err => done(err))
});
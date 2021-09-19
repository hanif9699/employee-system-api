const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const User=require('../dao/user');
const customFields = {
    usernameField: 'email',
    passwordField: 'password',
    // passReqToCallback: true
}

passport.use('local',new LocalStrategy(customFields,
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
  let opts = {}
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
  opts.secretOrKey = process.env.jwt_access_secret_key;
  passport.use('jwt',new JwtStrategy(opts, function(jwt_payload, done) {
      let expirationCheck = new Date(jwt_payload.exp * 1000)
      console.log(jwt_payload)
      if(expirationCheck < new Date()){
          done(null,false)
      }
      done(null,jwt_payload)
  }))
  
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
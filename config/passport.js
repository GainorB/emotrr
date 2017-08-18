const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/user');

module.exports = function(passport){
    let opts = {};

    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
    opts.secretOrKey = process.env.SECRET_KEY;
    passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
      console.log(jwt_payload);
        User.findById(jwt_payload.id, (err, user) => {
            if(err){
                return done(err, false);
            }

            if(user){
                return done(null, user);
            } else {
                return done(null, false);
            }
        });
    }));
}
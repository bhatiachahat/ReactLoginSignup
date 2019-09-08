const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;

//We use this to extract the JWT sent by the user
const ExtractJwt = require('passport-jwt').ExtractJwt;

//This verifies that the token sent by the user is valid
// var jwtOptions = {}
// jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeader();
// jwtOptions.secretOrKey = 'tasmanianDevil';
// passport.use(new JWTstrategy({
    
//   //secret we used to sign our JWT
//   secretOrKey : 'top_secret',
//   //we expect the user to send the token as a query paramater with the name 'secret_token'
//   jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
//   //jwtFromRequest : ExtractJWT.fromUrlQueryParameter('secret_token')
// }, async (token, done) => {
//   try {
//     //Pass the user details to the next middleware
//     return done(null, token.user);
//   } catch (error) {
//     done(error);
//   }
// }));


var jwtOptions = {}
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
//jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeader();
jwtOptions.secretOrKey = 'top_secret';

var strategy = new JwtStrategy(jwtOptions, async (token, done) => {
    try {
      //Pass the user details to the next middleware
      return done(null, token.user);
    } catch (error) {
      done(error);
    }
  });

passport.use(strategy);







// passport.use(new JWTstrategy({
//     //secret we used to sign our JWT
//     secretOrKey : 'top_secret',
//     //we expect the user to send the token as a query paramater with the name 'secret_token'
//     jwtFromRequest : ExtractJWT.fromUrlQueryParameter('secret_token')
//   }, async (token, done) => {
//     try {
//       //Pass the user details to the next middleware
//       return done(null, token.user);
//     } catch (error) {
//       done(error);
//     }
//   }));
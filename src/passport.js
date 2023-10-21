import passport from "passport";
import gAuth from "passport-google-oauth2";
import dotenv from 'dotenv';
dotenv.config();

const GoogleStrategy = gAuth.Strategy;

passport.use(new GoogleStrategy({
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        callbackURL: "http://localhost:5000/api/login/google/callback",
        passReqToCallback   : true
},
function(request, accessToken, refreshToken, profile, done) {
        return done(null, profile);
}
));

passport.serializeUser(function(user, done) {
done(null, user);
});

passport.deserializeUser(function(user, done) {
done(null, user);
});
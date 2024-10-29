const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/userModel');
const dotenv = require('dotenv');
const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env;

dotenv.config();

passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: '/api/auth/google/callback'
    },
    async (accessToken, refreshToken, profile, done) => {
      const { id, displayName, emails } = profile;
      const email = emails[0].value;

      try {
        let user = await User.findOne({ googleId: id });

        if (!user) {
          user = new User({
            name: displayName,
            email,
            googleId: id
          });
          await user.save();
        }

        done(null, user);
      } catch (error) {
        done(error, null);
      }
    }
  )
);

module.exports = passport;

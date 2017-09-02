const passport = require('passport');
const Users = require('../../models/users');

module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user.username);
  });

  passport.deserializeUser((username, done) => {
    Users.findByUserName(username)
      .then(user => {
        done(null, user);
      }).catch(err => {
        done(err, null);
      });
  });
};
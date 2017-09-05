const db = require('../db/config');

const Users = {};

Users.findByUserName = userName => {
  return db.oneOrNone(`
    SELECT * FROM users
    WHERE "userName" = $1
  `, [userName]);
};

Users.create = user => {
  return db.one(`
    INSERT INTO users
    ("userName", email, password_digest)
    VALUES ($1, $2, $3)
    RETURNING *
  `, [user.username, user.email, user.password_digest]);
};

Users.findUserWords = id => {
  return db.manyOrNone(`
    SELECT * FROM dictionary
    WHERE user_id = $1
  `, [id]);
};

module.exports = Users;
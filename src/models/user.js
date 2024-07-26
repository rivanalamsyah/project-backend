const db = require('../config');

const User = {
  findByUsername: (username, callback) => {
    return db.query('SELECT * FROM User WHERE username = ?', [username], (err, results) => {
      if (err) {
        return callback(err);
      }
      if (results.length === 0) {
        return callback(null, null);
      }
      callback(null, results[0]);
    });
  },
  findByEmail: (email, callback) => {
    return db.query('SELECT * FROM User WHERE email = ?', [email], callback);
  },
  create: (newUser, callback) => {
    return db.query('INSERT INTO User SET ?', newUser, callback);
  },
  getAll: (callback) => {
    return db.query('SELECT * FROM User', callback);
  },
  getById: (id, callback) => {
    return db.query('SELECT * FROM User WHERE id = ?', [id], callback);
  },
  update: (id, updatedUser, callback) => {
    return db.query('UPDATE User SET ? WHERE id = ?', [updatedUser, id], callback);
  },
  delete: (id, callback) => {
    return db.query('DELETE FROM User WHERE id = ?', [id], callback);
  }
};

module.exports = User;

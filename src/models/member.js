const db = require('../config');

const Member = {
  create: (newMember, callback) => {
    return db.query('INSERT INTO Member SET ?', newMember, callback);
  },
  getAll: (callback) => {
    return db.query('SELECT * FROM Member', callback);
  },
  getById: (id, callback) => {
    return db.query('SELECT * FROM Member WHERE id = ?', [id], callback);
  },
  update: (id, updatedMember, callback) => {
    return db.query('UPDATE Member SET ? WHERE id = ?', [updatedMember, id], callback);
  },
  delete: (id, callback) => {
    return db.query('DELETE FROM Member WHERE id = ?', [id], callback);
  }
};

module.exports = Member;

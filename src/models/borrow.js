const db = require('../config');

const Borrow = {
  create: (newBorrow, callback) => {
    return db.query('INSERT INTO Borrow SET ?', newBorrow, callback);
  },
  getAll: (callback) => {
    return db.query('SELECT * FROM Borrow', callback);
  },
  getById: (id, callback) => {
    return db.query('SELECT * FROM Borrow WHERE id = ?', [id], callback);
  },
  update: (id, updatedBorrow, callback) => {
    return db.query('UPDATE Borrow SET ? WHERE id = ?', [updatedBorrow, id], callback);
  },
  delete: (id, callback) => {
    return db.query('DELETE FROM Borrow WHERE id = ?', [id], callback);
  }
};

module.exports = Borrow;

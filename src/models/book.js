const db = require('../config');

const Book = {
  create: (newBook, callback) => {
    return db.query('INSERT INTO Book SET ?', newBook, callback);
  },
  getAll: (callback) => {
    return db.query('SELECT * FROM Book', callback);
  },
  getById: (id, callback) => {
    return db.query('SELECT * FROM Book WHERE id = ?', [id], callback);
  },
  update: (id, updatedBook, callback) => {
    return db.query('UPDATE Book SET ? WHERE id = ?', [updatedBook, id], callback);
  },
  delete: (id, callback) => {
    return db.query('DELETE FROM Book WHERE id = ?', [id], callback);
  }
};

module.exports = Book;

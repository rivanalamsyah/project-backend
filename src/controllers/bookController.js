const Book = require('../models/book');

const getAllBooks = (req, res) => {
  Book.getAll((err, books) => {
    if (err) return res.status(500).send(err);
    res.send(books);
  });
};

const getBookById = (req, res) => {
  const bookId = req.params.id;
  Book.getById(bookId, (err, book) => {
    if (err) return res.status(500).send(err);
    if (!book.length) return res.status(404).send('Book not found');
    res.send(book[0]);
  });
};

const createBook = (req, res) => {
  const { title, author, publication_year, genre, available_copies } = req.body;
  const book = { title, author, publication_year, genre, available_copies };
  Book.create(book, (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(201).send('Book created');
  });
};

const updateBook = (req, res) => {
  const bookId = req.params.id;
  const { title, author, publication_year, genre, available_copies } = req.body;
  const book = { title, author, publication_year, genre, available_copies };
  Book.update(bookId, book, (err, result) => {
    if (err) return res.status(500).send(err);
    res.send('Book updated');
  });
};

const deleteBook = (req, res) => {
  const bookId = req.params.id;
  Book.delete(bookId, (err, result) => {
    if (err) return res.status(500).send(err);
    res.send('Book deleted');
  });
};

module.exports = {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook
};

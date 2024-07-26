const Borrow = require('../models/borrow');

const getAllBorrows = (req, res) => {
  Borrow.getAll((err, borrows) => {
    if (err) return res.status(500).send(err);
    res.send(borrows);
  });
};

const getBorrowById = (req, res) => {
  const borrowId = req.params.id;
  Borrow.getById(borrowId, (err, borrow) => {
    if (err) return res.status(500).send(err);
    if (!borrow.length) return res.status(404).send('Borrow record not found');
    res.send(borrow[0]);
  });
};

const createBorrow = (req, res) => {
  const { book_id, member_id, borrow_date, return_date } = req.body;
  const borrow = { book_id, member_id, borrow_date, return_date };
  Borrow.create(borrow, (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(201).send('Borrow record created');
  });
};

const updateBorrow = (req, res) => {
  const borrowId = req.params.id;
  const { book_id, member_id, borrow_date, return_date } = req.body;
  const borrow = { book_id, member_id, borrow_date, return_date };
  Borrow.update(borrowId, borrow, (err, result) => {
    if (err) return res.status(500).send(err);
    res.send('Borrow record updated');
  });
};

const deleteBorrow = (req, res) => {
  const borrowId = req.params.id;
  Borrow.delete(borrowId, (err, result) => {
    if (err) return res.status(500).send(err);
    res.send('Borrow record deleted');
  });
};

module.exports = {
  getAllBorrows,
  getBorrowById,
  createBorrow,
  updateBorrow,
  deleteBorrow
};

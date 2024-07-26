const express = require('express');
const router = express.Router();
const { getAllBorrows, getBorrowById, createBorrow, updateBorrow, deleteBorrow } = require('../controllers/borrowController');
const auth = require('../middleware/auth');
const checkRole = require('../middleware/checkRole');

router.get('/', auth, checkRole(['admin', 'user']), getAllBorrows);
router.get('/:id', auth, checkRole(['admin', 'user']), getBorrowById);
router.post('/', auth, checkRole(['admin', 'user']), createBorrow);
router.put('/:id', auth, checkRole(['admin', 'user']), updateBorrow);
router.delete('/:id', auth, checkRole(['admin']), deleteBorrow);

module.exports = router;

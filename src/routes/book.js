const express = require('express');
const router = express.Router();
const { getAllBooks, getBookById, createBook, updateBook, deleteBook } = require('../controllers/bookController');
const auth = require('../middleware/auth');
const checkRole = require('../middleware/checkRole');

router.get('/', auth, checkRole(['admin', 'user']), getAllBooks);
router.get('/:id', auth, checkRole(['admin', 'user']), getBookById);
router.post('/', auth, checkRole(['admin']), createBook);
router.put('/:id', auth, checkRole(['admin']), updateBook);
router.delete('/:id', auth, checkRole(['admin']), deleteBook);

module.exports = router;
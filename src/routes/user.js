const express = require('express');
const router = express.Router();
const { getAllUsers, getUserById, createUser, updateUser, deleteUser } = require('../controllers/userController');
const auth = require('../middleware/auth');
const checkRole = require('../middleware/checkRole');

router.get('/', auth, checkRole(['admin']), getAllUsers);
router.get('/:id', auth, checkRole(['admin']), getUserById);
router.post('/', auth, checkRole(['admin']), createUser);
router.put('/:id', auth, checkRole(['admin']), updateUser);
router.delete('/:id', auth, checkRole(['admin']), deleteUser);

module.exports = router;

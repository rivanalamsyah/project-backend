const express = require('express');
const router = express.Router();
const { getAllMembers, getMemberById, createMember, updateMember, deleteMember } = require('../controllers/memberController');
const auth = require('../middleware/auth');
const checkRole = require('../middleware/checkRole');

router.get('/', auth, checkRole(['admin']), getAllMembers);
router.get('/:id', auth, checkRole(['admin']), getMemberById);
router.post('/', auth, checkRole(['admin']), createMember);
router.put('/:id', auth, checkRole(['admin']), updateMember);
router.delete('/:id', auth, checkRole(['admin']), deleteMember);

module.exports = router;

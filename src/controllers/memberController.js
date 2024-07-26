const Member = require('../models/member');

const getAllMembers = (req, res) => {
  Member.getAll((err, members) => {
    if (err) return res.status(500).send(err);
    res.send(members);
  });
};

const getMemberById = (req, res) => {
  const memberId = req.params.id;
  Member.getById(memberId, (err, member) => {
    if (err) return res.status(500).send(err);
    if (!member.length) return res.status(404).send('Member not found');
    res.send(member[0]);
  });
};

const createMember = (req, res) => {
  const { user_id, membership_date } = req.body;
  const member = { user_id, membership_date };
  Member.create(member, (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(201).send('Member created');
  });
};

const updateMember = (req, res) => {
  const memberId = req.params.id;
  const { user_id, membership_date } = req.body;
  const member = { user_id, membership_date };
  Member.update(memberId, member, (err, result) => {
    if (err) return res.status(500).send(err);
    res.send('Member updated');
  });
};

const deleteMember = (req, res) => {
  const memberId = req.params.id;
  Member.delete(memberId, (err, result) => {
    if (err) return res.status(500).send(err);
    res.send('Member deleted');
  });
};

module.exports = {
  getAllMembers,
  getMemberById,
  createMember,
  updateMember,
  deleteMember
};
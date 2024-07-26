const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/user');

exports.register = (req, res) => {
  const newUser = req.body;
  bcrypt.hash(newUser.password, 10, (err, hash) => {
    if (err) {
      console.log('Error hashing password:', err);
      return res.status(500).send(err);
    }
    newUser.password = hash;
    User.create(newUser, (err, result) => {
      if (err) {
        console.log('Error creating user:', err);
        return res.status(500).send(err);
      }
      res.send('User registered successfully');
    });
  });
};

exports.login = (req, res) => {
  const { username, password } = req.body;
  console.log('Login attempt:', username);
  
  User.findByUsername(username, (err, user) => {
    if (err) {
      console.log('Error finding user:', err);
      return res.status(500).send(err);
    }
    if (!user) {
      console.log('User not found');
      return res.status(400).send('Username or password is wrong');
    }
    
    bcrypt.compare(password, user.password, (err, result) => {
      if (err) {
        console.log('Error comparing password:', err);
        return res.status(500).send(err);
      }
      if (!result) {
        console.log('Invalid password');
        return res.status(400).send('Invalid password');
      }
      
      const token = jwt.sign({ _id: user.id, role: user.role }, process.env.TOKEN_SECRET);
      console.log('Token created:', token);
      res.header('Authorization', token).send({ token });
    });
  });
};

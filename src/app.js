const express = require('express');
const app = express();
const dotenv = require('dotenv');

dotenv.config();

const authRoute = require('./routes/auth');
const userRoute = require('./routes/user');
const bookRoute = require('./routes/book');
const memberRoute = require('./routes/member');
const borrowRoute = require('./routes/borrow');

app.use(express.json());

app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/books', bookRoute);
app.use('/api/members', memberRoute);
app.use('/api/borrows', borrowRoute);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

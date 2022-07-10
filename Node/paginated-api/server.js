const express = require('express');
const cors = require('cors');
const app = express();
app.use(
  cors({
    origin: '*',
  })
);
const mongoose = require('mongoose');
const User = require('./users');

mongoose.connect('mongodb://localhost/users', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.once('open', async () => {
  if ((await User.countDocuments().exec()) > 0) return;

  const createNoOfUsers = (no) => {
    const users = [];
    for (let i = 0; i < no; i++) {
      users.push({
        name: `User ${i}`,
      });
    }
    return users;
  };

  User.insertMany(createNoOfUsers(100)).then(() => {
    console.log('Users created');
  });
});

const paginatedResults = (model) => {
  return async (req, res, next) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const results = {};
    const totalRecords = await model.countDocuments().exec();

    if (endIndex < totalRecords) {
      results.next = {
        page: page + 1,
        limit: limit,
      };
    }

    if (startIndex > 0) {
      results.previous = {
        page: page - 1,
        limit: limit,
      };
    }

    try {
      results.results = await model.find().limit(limit).skip(startIndex).exec();
      results.totalRecords = totalRecords;
      res.paginatedResults = results;
      next();
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
};

app.get('/users', paginatedResults(User), (req, res) => {
  res.json(res.paginatedResults);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

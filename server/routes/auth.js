const express = require('express');
const User = require('../models/user');

const authRouter = express.Router();

authRouter.post('/api/signup', async (req, res) => {
  try {
    // get the data from client
    const { email, name, password } = req.body;

    // verify the email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).send({ message: 'User with same email already exists!' });
    }

    // post that data in database
    let user = new User({
      email,
      password,
      name,
    });
    user = await user.save();

    // return that data to the user
    return res.status(201).json({ user });
  } catch(error) {
    console.error(error);
    return res.status(500).send({ error: error.message });
  }
});

module.exports = authRouter;

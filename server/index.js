const express = require('express');
const authRouter = require('./routes/auth');
const mongoose = require('mongoose');
require('dotenv').config();

// INIT
const app = express();
const PORT = process.env.PORT;
const DB = process.env.DB_CONNECTION;

app.use(express.json());

app.get('/', (_req, res) => res.status(200).send('Connection OK!'));

// middleware
app.use(authRouter);

// Connections
mongoose
  .connect(DB)
  .then(
    () => console.log('Connected to MongoDB')
  )
  .catch(
    (err) => console.error(err)
  );

app.listen(PORT, () => console.log(`connecting at port ${PORT}.`));

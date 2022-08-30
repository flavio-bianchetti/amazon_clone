const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;
const DB = process.env.DB_CONNECTION;

app.use(express.json());

app.get('/', (_req, res) => res.status(200).send('Connection OK!'));

app.listen(PORT, () => console.log(`connecting at port ${PORT}.`));

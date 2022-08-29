const express = require('express');

const app = express();
const PORT = 3001;

app.use(express.json());

app.get('/', (_req, res) => res.status(200).send('Connection OK!'));

app.listen(PORT, () => console.log(`connecting at port ${PORT}.`));

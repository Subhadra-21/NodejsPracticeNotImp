// run `node index.js` in the terminal

const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.resolve('pages/home.html'));
});

app.get('/sampledata', (req, res) => {
  res.json({ a: 'a', b: 'b' });
});

app.listen(8000, () => {
  console.log('server listening...');
});

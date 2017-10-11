const express = require('express');
const path = require('path');

const port = 3000 || process.env.PORT;

let app = express();

app.get('*/bundle.js', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/../dist/bundle.js'));
});

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/../dist/index.html'));
});

app.listen(port, () => {
  console.log('Listening on port ' + port);
});
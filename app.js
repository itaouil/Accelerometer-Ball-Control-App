// Dependencies
const pug     = require('pug');
const express = require('express');
const random  = require('./helpers/random');

// Express App
const app = express();

// Port Serving On
const port = 8000;

// Start Server
app.listen(port, () => {
  console.log(`Server listening on port ${port} ...`);
});

// Route
app.get("/", (req, res) => {

  try {
    res.send(pug.compileFile(__dirname + '/templates/game.pug')({
      id: random(5),
      title: 'Game',
      host: req.hostname,
      port: port
    }));
  }

  catch (e) {
    console.log(e);
  }

});

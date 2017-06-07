// Dependencies
const pug     = require('pug');
const express = require('express');

// Express App
const app = express();

// Port Serving On
const port = 3000;

// Start Server
app.listen(port, () => {
  console.log(`Server listening on port ${port} ...`);
});

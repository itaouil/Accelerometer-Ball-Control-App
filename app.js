// Dependencies
const app     = require('express')();
const server  = require('http').Server(app);
const io      = require('socket.io')(server);
const pug     = require('pug');
const random  = require('./helpers/random');

// Port Serving On
const port = 8000;

// Start Server
server.listen(port, () => {
  console.log(`Server listening on port ${port} ...`);
});

// Main Route (Browser)
app.get("/", (req, res, next) => {

  // ID generated
  var id = random(3);

  // Socket.io custom namespace
  var room = io.of('/' + id);

  room.on('connection', (socket) => {

    var ready = false;

    socket.on('movement', (data) => {
      if (!ready) {
        room.emit('connected');
        ready = true;
      }

      room.emit('updateBall', data);
    });

  });

  // Render Page (with some data, id, title, etc...)
  try {
    res.send(pug.compileFile(__dirname + '/templates/game.pug')({
      id: id,
      title: 'Game',
      host: req.hostname,
      port: port
    }));
  }

  catch (e) {
    next(e);
  }

});

// Main Route (Device)
app.get("/:id", (req, res, next) => {

  try {
    res.send(pug.compileFile(__dirname + '/templates/controller.pug')({
      id: req.params.id,
      title: 'Controller',
      host: req.hostname,
      port: port
    }));
  }

  catch (e) {
    next(e);
  }

});

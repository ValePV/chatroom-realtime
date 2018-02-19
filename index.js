var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
  console.log('usuario id:%s', socket.id);
  var addedUser = false;

  socket.on('chat message', function(msg) {
    var payload = {
      author: document.getElementById(nickname).value
    }
    io.emit('chat message', payload + msg);
  });


http.listen(port, function() {
  console.log('listening on *:' + port);
});
});

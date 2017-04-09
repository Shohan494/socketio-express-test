var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
res.sendFile(__dirname + '/index.html');
});

//Whenever someone connects this gets executed
io.on('connection', function(socket){
  console.log('A user connected');
  //Send a message after a timeout of 4seconds
  /*
  setTimeout(function(){
    socket.send('Sent a message 4seconds after connection!');
  }, 4000);
  */
  //Send a message when 
  setTimeout(function(){
	  //Sending an object when emmiting an event
	socket.emit('testerEvent', { description: 'A custom event named testerEvent!'});
	}, 4000);
	//Whenever someone disconnects this piece of code executed
  socket.on('disconnect', function () {
    console.log('A user disconnected');
  });

});

// which port the app is using
http.listen(3000, function(){
  console.log('listening on *:3000');
});
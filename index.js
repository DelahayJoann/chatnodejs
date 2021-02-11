var express = require('express');
var app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', function(req,res){
    res.sendFile(__dirname + "/index.html");
});
app.get('/css', function(req,res){
    res.sendFile(__dirname + "/style.css");
});

http.listen(3000, function(){
    console.log("Listen");
});

io.on('connection', function(socket){
    console.log('connection socket');
    socket.on('chat', function(call){
        io.emit('chat', call);
    });
    socket.on('disconnect', () =>{
        console.log('disconnected');
    });
});
const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', function(req,res){
    res.sendFile(__dirname + "/index.html");
});
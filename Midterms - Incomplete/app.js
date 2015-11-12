//Parse Data - DataBase shit


//Socket Node shit
var bodyParser = require('body-parser');
var express = require("express");
var app = express();//create instance of express
var port = 8000;
var url='localhost'
var server = app.listen(port);
var io = require("socket.io").listen(server);//socket io listen on port

var serialport = require("serialport");//serial port instance
var SerialPort = serialport.SerialPort;
var sport = new SerialPort("/dev/ttyAMA0", { // create SerialPort instance called sport
  baudrate: 9600,// give baudrate
  parser: serialport.parsers.readline("\n") //parse data when end of line present
}, false);

app.use(express.static(__dirname + '/'));//serve diectory this file is in
console.log('Simple static server listening at '+url+':'+port);


//open a port for the serial data to index.html-------------------------------------------------
io.sockets.on('connection', function (socket) {//open io connection
  sport.open(function(error) {//open serial connection
  
  if (error) {
    console.log('failed to open: ' + error);
    //send that data yo!
  } 
  else {
    //port.write("A"); --- needed??
    console.log('Serial Open');
    //getting the data in there 
    sport.on('data',function(data){
      
      //var tiggered = data[3];
      console.log("They be stepping on = "+data);
      socket.emit('tiggers',{tiggers:data});
    });

  
  //-- Sending alert Back

  //   socket.on('startaledGoat', function(data){
  //     console.log("you triggered the " + data.g);
  // };
  }
 });
 }); 
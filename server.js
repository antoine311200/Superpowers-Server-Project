var io = require('socket.io');
var util = require("util");

var socket, clients;

socket = io().listen(8001);

function init() {
  console.log("Initialization");
  
  clients = [];
  setEventHandlers();
}

function setEventHandlers() {
  socket.sockets.on("connection", onSocketConnection);
}

function onSocketConnection(client) {
  client.on("client", onNewClient);
  client.on("message", onMessageReceive);
  
  client.emit("new client", {client: clients.local});
}

function onMessageReceive(data) {

}

function onNewClient(data) {
  util.log(data.name+" has connected"); 
  client.local = data; 
}

init();

const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    ws.send(message); // Echo the message back
  });
});

console.log('WebSocket server running on ws://localhost:8080');

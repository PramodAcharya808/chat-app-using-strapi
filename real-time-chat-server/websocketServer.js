// Path: ./websocketServer.js

const WebSocket = require("ws");

// Create a WebSocket server
const wss = new WebSocket.Server({ port: 8080 }); // Replace with your desired port number

wss.on("connection", function connection(ws) {
  console.log("WebSocket client connected");

  // Handle messages from clients
  ws.on("message", function incoming(message) {
    console.log("Received message from client:", message);

    // Echo the message back to the client
    ws.send(`Im server: ${message} (from-server)`);
  });

  // Handle client disconnection
  ws.on("close", function close() {
    console.log("WebSocket client disconnected");
  });
});

console.log("WebSocket server started on port 8080");

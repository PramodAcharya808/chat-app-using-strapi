// Path: ./config/hooks/socketio.js

const socketIO = require("socket.io");

module.exports = (strapi) => {
  return {
    initialize() {
      const server = strapi.server;

      // Initialize Socket.io
      const io = socketIO(server, {
        cors: {
          origin: "*", // Replace with your frontend URL or '*'
          methods: ["GET", "POST"],
        },
      });

      // Handle Socket.io events
      io.on("connection", (socket) => {
        console.log(`Socket.io client connected: ${socket.id}`);

        // Example: Handle incoming messages from client
        socket.on("message", (data) => {
          console.log(`Received message from client: ${data}`);

          // Echo the message back to the client
          socket.emit("message", data);
        });

        // Example: Handle disconnect
        socket.on("disconnect", () => {
          console.log(`Socket.io client disconnected: ${socket.id}`);
        });
      });

      strapi.io = io; // Make Socket.io instance accessible globally in Strapi
    },
  };
};

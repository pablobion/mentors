const express = require('express')
const { createServer } = require('http');
const { Server } = require('socket.io');
const app = express('express')
const cors = require('cors'); // Importe o pacote cors
const socketController = require('./src/controller/socket');
const httpController = require('./src/controller/http');
const { instrument } = require("@socket.io/admin-ui");

app.use(express.json());

app.use(cors())
const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: ["http://localhost:3001", "https://admin.socket.io"],
        credentials: true
    }
});


instrument(io, {
    auth: false
  });

socketController(io)
httpController(app)


httpServer.listen(3000, () => {
    console.log('server running at http://localhost:3000');
});
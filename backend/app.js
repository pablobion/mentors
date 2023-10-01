const express = require('express')
const { createServer } = require('http');
const { Server } = require('socket.io');
const app = express('express')
const cors = require('cors'); // Importe o pacote cors
const socketController = require('./src/controller/socket');

app.use(express.json());

app.use(cors())
const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: "http://localhost:3001"
    }
});

socketController(io)




app.get('/', (req, res) => {
    res.json({'alla': 'lala'})
})
app.get('/getTemas', (req, res) => {
    console.log('chegou aqui')
    res.json([
        {label: 'ajsia 1', value:"1"},
        {label: 'ajsia 2', value:"2"},
        {label: 'ajsia 3', value:"3"},
    ])
})
app.get('/startMentoria', (req, res) => {
    res.json({message: 'iniciou'})
})

// io.on('connection', (socket) => {
//     console.log('a user connected');
// });

httpServer.listen(3000, () => {
    console.log('server running at http://localhost:3000');
});
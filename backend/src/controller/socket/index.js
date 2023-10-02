const {generateIdRoom} =  require('../../utils/generateCode')

module.exports = (io) => {

    io.on('connection', (socket) => {
        console.log('a user connected');

        socket.on('start room', ({pid}) => {
            
            console.log(`entraram sala ${pid} foi o id: ${socket.id}`)
            socket.join(`room_${pid}`);
            console.log(io.sockets.adapter.rooms);
        })

        socket.on('join room', async ({pid}) => {
            //Assuming data.id is the room identifier
            const roomUsers = await io.in(`room_${pid}`).allSockets();
            
            //There, you make your socket join the room if room users are not exceeding 
            //your maximum
            if(roomUsers.size < 2) socket.join(`room_${pid}`);
            console.log(roomUsers)
         });
         
         socket.on("disconnecting", () => {
            console.log(socket.rooms); // the Set contains at least the socket ID
          });
     
    });

   

   
    
}
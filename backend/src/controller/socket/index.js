const {generateIdRoom} =  require('../../utils/generateCode')

module.exports = (io) => {

    io.on('connection', () => {
        console.log('a user connected' + generateIdRoom());
    });

    io.on('start room', () => {
        const idRoom = generateIdRoom();
        socket.join(`room_${idRoom}`);
    })
    
}
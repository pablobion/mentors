const generateIdRoom = (param) => {
    if(param){

    } else {
        return Math.floor(Math.random() * 900000) + 100000
    }
}

module.exports = {
    generateIdRoom
}
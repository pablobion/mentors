const {generateIdRoom} =  require('../../utils/generateCode')

module.exports = (app) => {

    app.get('/', (req, res) => {
        res.json({'alla': 'lala'})
    })

    app.get('/getTemas', (req, res) => {
        console.log('chegou aqui')
        res.json([
            {label: 'ajsia 11', value:"1"},
            {label: 'ajsia 2', value:"2"},
            {label: 'ajsia 3', value:"3"},
        ])
    })

    app.get('/startMentoria', (req, res) => {
        const pid = generateIdRoom();
        res.json({message: 'iniciou', pid})
    })
    
}
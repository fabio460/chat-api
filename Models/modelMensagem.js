const Sequelize = require('sequelize')
const sequelize = new Sequelize('chat','root','',{
    host:'localhost',
    dialect:'mysql'
})

const modelMensagem = sequelize.define('mensagem',{
    emissor:{type:Sequelize.STRING},
    receptor:{type:Sequelize.STRING},
    body:{type:Sequelize.STRING}
})
// modelMensagem.sync({force:true})
module.exports = modelMensagem
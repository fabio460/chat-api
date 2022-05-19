const Sequelize = require('sequelize')
const sequelize = new Sequelize('chat','root','',{
    host:'localhost',
    dialect:'mysql'
})

const tabelaUsuario = sequelize.define('usuario',{
    nome:{type:Sequelize.STRING},
    email:{type:Sequelize.STRING},
    senha:{type:Sequelize.STRING},
    avatar:{type:Sequelize.STRING},
})
module.exports = tabelaUsuario
// tabelaUsuario.sync({force:true})
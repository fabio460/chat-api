const modelUsuario = require('../Models/modelUsuario')
const Sequelize = require('sequelize')
const sequelize = new Sequelize('chat','root','',{
    host:'localhost',
    dialect:'mysql'
})
exports.getUsuarios = async(req,res)=>{
    let id = req.body.id
    const tabela =await sequelize.query(`SELECT * FROM usuarios WHERE id ='${id}'` )
    res.send(tabela[0])

}
exports.setUsuarios = (req,res)=>{
  const tabela =  modelUsuario.create({
    nome:req.body.nome,
    email:req.body.email,
    senha:req.body.senha,
    avatar:req.body.avatar  
  })
  if(tabela){
      res.send('inserido com sucesso')
  }
}

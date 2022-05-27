const modelUsuario = require('../Models/modelUsuario')
const Sequelize = require('sequelize')
const jwt = require('jsonwebtoken')
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

exports.gerar_jwt =async (req,res)=>{
    
  const {email,senha} = req.body;
  const user =await sequelize.query(`SELECT * FROM usuarios WHERE email ='${email}' AND senha ='${senha}'` )
  
  if(user[0] == ""){
    res.send("null")
  }else{
    return res.json({
      token : jwt.sign({usuario:req.body.usuario},'my-secret-key',{expiresIn:300}),
      usuario:user[0]
    })
    
  }
  
}

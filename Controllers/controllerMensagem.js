
const modelMensagem = require('../Models/modelMensagem')
const modelUsuario = require('../Models/modelUsuario')
const Sequelize = require('sequelize')
const sequelize = new Sequelize('chat','root','',{
    host:'localhost',
    dialect:'mysql'
})

exports.listarUsuario = async (req,res)=>{
   const l =await modelUsuario.findAll()
   res.send(l)
}
exports.getMensagem =async (req,res)=>{    
    let emissor = req.body.emissor
    let receptor =req.body.receptor
    const userEmissor = await sequelize.query(`SELECT * FROM usuarios WHERE id ='${emissor}'`)
    const userReceptor = await sequelize.query(`SELECT * FROM usuarios WHERE id ='${receptor}'`)
    const query = `SELECT * FROM mensagems WHERE (emissor = '${emissor}' AND receptor = '${receptor}') OR (emissor = '${receptor}' AND receptor = '${emissor}')`
    const tabela = await sequelize.query(query)
    res.json(
        {
            mensagens:tabela[0],
            receptor:userReceptor[0],
            emissor:userEmissor[0]
        }
    )
}
exports.getUsuariosDasMensagens =async (req,res)=>{
    let emissor = req.body.emissor
   
    let queryAtual = `SELECT U.id,receptor,emissor,MAX(body) As ulmimaMensagem,nome AS nomeDoReceptor,M.createdAt AS hora FROM mensagems M ,usuarios U WHERE (emissor = ${emissor} AND receptor = u.id) or (receptor = ${emissor} AND emissor = u.id) GROUP BY u.id;`
    let queryAntiga = `SELECT U.id,receptor,emissor,nome AS nomeDoReceptor,MAX(body) As ulmimaMensagem,M.createdAt AS hora FROM mensagems M ,usuarios U WHERE emissor = '${emissor}' AND receptor = U.id  GROUP BY M.receptor `
    let queryTeste = `SELECT id,emissor,receptor,body as ulmimaMensagem,updatedAt as hora FROM mensagems WHERE receptor = ${emissor} or emissor = ${emissor};`
    const ids =await sequelize.query(queryAtual)
    
    let values = []
     
     values = ids[0].filter(function (a) {
         return !this[JSON.stringify(a)] && (this[JSON.stringify(a)] = true);
     }, Object.create(null))
     res.json(values)
}
exports.setMensagem =async (req,res)=>{
    const tabela = modelMensagem.create({
        emissor:req.body.emissor,
        receptor:req.body.receptor,
        body:req.body.body
    })
    if(tabela){
        res.send('inserido com')
    }   
}
exports.deletarMensagem = (req,res)=>{
   const tabela = modelMensagem.destroy({
        where:{id:req.body.id}
    }).then(res=>console.log(res)).catch(res=>console.log(res))
    res.send(tabela)
}
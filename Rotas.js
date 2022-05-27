const rotas = require('express').Router()
const controllerUsuario = require('./Controllers/controllerUsuario')
const controllerMensagem = require('./Controllers/controllerMensagem')
const multer = require('multer');
const configMulter = require('./configMulter')
rotas.post('/listarUsuarios',multer(configMulter).single(),controllerUsuario.getUsuarios)
rotas.post('/inserirUsuarios',multer(configMulter).single(),controllerUsuario.setUsuarios)
rotas.post('/listarMensagem',multer(configMulter).single(),controllerMensagem.getMensagem)
rotas.post('/getUsuariosDasMensagens',multer(configMulter).single(),controllerMensagem.getUsuariosDasMensagens)
rotas.post('/inserirMensagem',multer(configMulter).single(),controllerMensagem.setMensagem)
rotas.delete('/deletarMensagem',multer(configMulter).single(),controllerMensagem.deletarMensagem)
rotas.get('/usuarios',multer(configMulter).single(),controllerMensagem.listarUsuario)
rotas.post('/jwt',multer(configMulter).single(),controllerUsuario.gerar_jwt)
module.exports = rotas

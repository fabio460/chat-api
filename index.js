const express = require('express')
const app = express()
// const conexao = require('./conexao')
const rotas = require('./Rotas')
const cors = require('cors');  
app.use(cors());

app.use(rotas)
app.listen(4001)
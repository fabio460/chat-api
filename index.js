const express = require('express')
require('dotenv').config()
const PORT = process.env.PORT || 3000;
const app = express()
// const conexao = require('./conexao')
// const rotas = require('./Rotas')
// const cors = require('cors');  
// app.use(cors());

//app.use(rotas)
app.get("/",(req,res)=>{
    res.send("alo mundo")
})

app.listen(PORT)
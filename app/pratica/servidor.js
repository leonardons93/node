const porta = 3003
const express = require('express')
const app = express()
const banco = require('./banco')

app.get('/produto',(req,res,next)=>{
    res.send(banco.getprodutos())
})
app.get('/produtos/:id',(req,res,next)=>{
    res.send(banco.getproduto(req.params.id))
})
app.listen(porta,()=>{
    console.log(`servidor estar executado na porta${porta}`)
})
app.post('/produtos',(req,res,next)=>{
    const produto = banco.salvarproduto({
        nome: req.body.name,
        preco: req.body.preco
    })
    res.send(produto)

})
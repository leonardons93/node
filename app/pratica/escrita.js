const fs = require('fs')

const produto = {
    nome: 'celular',
    preco: '1249',
    desconto: 0.15
}
fs.writeFile(__dirname + '/arquivoGerado.json',JSON.stringify(produto),erro =>{
    console.log(erro || 'arquivo salvo')
})
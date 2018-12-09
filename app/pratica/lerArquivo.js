const fs = require('fs')
//sicrono ..
const caminho = __dirname +'/arquivo.json'

const conteudo = fs.readFileSync(caminho,'utf-8')
console.log(conteudo)

//assincrono
fs.readFile(caminho,'utf-8',(erro,conteudo)=> {
  const config = JSON.parse(conteudo) 
  console.log(`${config.db.host}:${config.db.port}`)
}) 
const config = require('./arquivo.json')
console.log(config.db.host)
console.log(config.db.port)
fs.readdir(__dirname,(erro,arquivos)=>{
    console.log(arquivos)
})
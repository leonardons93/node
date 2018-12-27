const http = require('http')
http.createServer((req,res)=>{
    res.write('bomdia , tudo bem')
    res.end()
    
    }).listen(8080)
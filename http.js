const http = require('http')
http.createServer((req,res)=>{
    res.write('bomdia')
    res.end()
    
    }).listen(8080)
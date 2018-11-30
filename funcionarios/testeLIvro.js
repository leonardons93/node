var http = require ('http')
var url = require('url')

var requisicao = function(request, reponse) {
    reponse.writeHead(200,{"Content-Type":"text/html"});
    if(request.url == "/"){
    reponse.write("<h1>hello world</h1>");
    }
   else if(request.url == "/bemvindo"){
        reponse.write("<h1>bemVindo</h1>");
    }
    else{
        reponse.write("<h1>pagina nao emcontrada</h1>");
    }
    reponse.end();

}
var server = http.createServer(requisicao);
server.listen(3000);
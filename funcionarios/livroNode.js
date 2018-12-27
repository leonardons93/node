var http = require ('http')
var url = require('url')

var server = http.createServer(function(request, reponse) {
    reponse.writeHead(200,{"Content-Type":"text/html"});
    reponse.write("<h1>dados da query string</h1>");
    var result = url.parse(request.url, true);
    for(var key in result.query){
        reponse.white("<h2>"+key+":"+result.query[key]+"</h2>");
    }
    reponse.end();
});
server.listen(3000,function(){
    console.log('servidor http.')
});

var http = require ('http')
var url = require('url')

var requisicao = function(request, reponse) {
    reponse.writeHead(200,{"Content-Type":"text/html"});
    if(request.url == "/"){}
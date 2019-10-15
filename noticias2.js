
console.log("teste node")
var http = require('http');
var server = http.createServer(function ( req , res) {
	
	var categoria = req.url;
    if (categoria == '/tecnologia') {
       res.end("<html><body>corpo do site tec</body></html>");
	
    }
     else if(categoria == '/moda') {
    	res.end("<html><body>corpo do site moda</body></html>");
	
    }
    
	res.end("<html><body>corpo do site</body></html>");
	
}).listen(3000);
console.log("teste node")
var http = require('http');
var server = http.createServer(function (req, res) {
	res.end("<html><body>corpo do site</body></html>")
	
});
server.listen(3000);
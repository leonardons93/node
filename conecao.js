var mysql = require('mysql');


var connbanco = function(){
	console.log('teste bd 2')
	return mysql.createConnection({

host : 'localhost',
user : 'root',
password : 'rootleo',
database :'teste'
});
}


module.exports=function() {
console.log('teste bd')
return connbanco;

}
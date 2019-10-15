 module.exports = function(app){
app.get('/noticia',function(req,res){


var connection = app.server.conecao();

connection.query('select * from noticias where id_noticia = 2',function(erro,resultados){
 res.render("noticias/noticias.ejs",{noticia:resultados});
});


});
}
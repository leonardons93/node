var app = require('./server/server.js');
var consign = require('consign');
var rotahome = require('./app/rotas/home');
rotahome(app);
var rotamoda = require('./app/rotas/moda');
rotamoda(app);
var rotaform = require('./app/rotas/formulario_add_noticia');
rotaform(app);
var rotanoticia = require('./app/rotas/noticias')
rotanoticia(app);
app.listen(3000, function() {
  console.log("teste2 ")
});
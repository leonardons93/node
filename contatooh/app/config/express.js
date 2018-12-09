var express = require('express');
var home = require('../routes/home')
module.exports = function() {
var app = express();
app.set('port',3000);
app.use(express.static('./public'));
app.set('view engine', 'ejs');
app.use(app.router);
app.set('views','./app/views');
home(app);
return app;
};

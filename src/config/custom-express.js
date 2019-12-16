//Importando o express através da função require
const express = require('express');

//Extraindo o objeto do Express
const app = express();

//Importando arquivo de rotas
const rotas = require('../app/rotas/rotas');

//Declarando o módulo methodOverride
const methodOverride = require('method-override');

//Importando o marko para trabalhar com o Node
require('marko/node-require').install();

//Importando o marko para trabalhar com o express
require('marko/express');

//Importando o Body-parser
const bodyParser = require('body-parser');

app.use('/estatico', express.static('src/app/public'));

//Integrando o bodyparser ao appe definindo o middleware
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        // look in urlencoded POST bodies and delete it
        var method = req.body._method;
        delete req.body._method;
        return method;
    }
}));

//Vinculando as rotas ao objeto app do Express
rotas(app);

//Exportado o app
module.exports = app;

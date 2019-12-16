//Importando o express através da função require
const express = require('express');

//Extraindo o objeto do Express
const app = express();

//Importando arquivo de rotas
const rotas = require('../app/rotas/rotas');

//Importando o marko para trabalhar com o Node
require('marko/node-require').install();

//Importando o marko para trabalhar com o express
require('marko/express');

//Importando o Body-parser
const bodyParser = require('body-parser');

//Integrando o bodyparser ao appe definindo o middleware
app.use(bodyParser.urlencoded({
    extended: true
}));

//Vinculando as rotas ao objeto app do Express
rotas(app);

//Exportado o app
module.exports = app;

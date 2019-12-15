//Importando o custom-express
const app = require('./src/config/custom-express.js');

//Servidor escutando na porta 3000
app.listen(3000,function () {
    console.log('Servidor rodando na porta 3000');
});


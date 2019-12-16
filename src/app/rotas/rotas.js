const LivroDao = require('../infra/livro-dao');
const db = require('../../config/database');

module.exports = (app) => {
//Declarando o html
    let html = '';

//Criando a rota raiz
    app.get("/", function (req, res) {
        //Conigurando o html da raiz
        html = `
        <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1> Casa do Código com Nodemon </h1>
            </body> 
        </html>
    `;
        //Enviando html como resposta
        res.end(html);
    });

//Criando a rota para /livros
app.get('/livros', function(req, res) {
    const livroDao = new LivroDao(db);
    livroDao.lista()
            .then(livros => res.marko(
                require('../views/livros/lista/lista.marko'),
                {
                    livros: livros
                }
            ))
            .catch(erro => console.log(erro));
});

//Criando a rota para /livros/form
app.get('/livros/form', function (req, res) {
    res.marko(require('../views/livros/form/form.marko'));
  });


app.post('/livros', function(req, res) {
    console.log(req.body);
    const livroDao = new LivroDao(db);
    livroDao.adiciona(req.body)
            .then(res.redirect('/livros'))   
            .catch(erro => console.log(erro));
});

}


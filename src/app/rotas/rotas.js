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
    app.get('/livros', function (req, res) {
      res.marko(
          require('../views/livros/lista/lista.marko'),
          {
            livros: [
                { 
                    id: 1,
                    titulo: 'Fundamentos do Node'
                },
                { 
                    id: 2,
                    titulo: 'Node Avançado'
                }
            ]
          }
      );
    });
};


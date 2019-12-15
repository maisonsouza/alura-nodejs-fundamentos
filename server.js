//Importando o módulo do http do Node com a função require.
const http = require('http');

//Criação do servidor com o método createServer
const servidor = http.createServer(function (req, resp) {
    let html = '';
    //Se a requisição for para a raiz
    if(req.url=="/"){
        html = `
        <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1> Casa do Código </h1>
            </body> 
        </html>
    `;
    }
    //Caso seja feita uma requisição para /livros
    else if(req.url=='/livros') {
        html = `
        <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1> Página de Livros </h1>
            </body> 
        </html>
    `;
    }
    resp.end(html);

});

//Servidor escutando na porta 3000
servidor.listen(3000);

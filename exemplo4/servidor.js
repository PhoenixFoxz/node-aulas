import http from 'http'; // importando módulo nativo http.

import fs from 'fs/promises'; // file system: permite ao servidor acesso ao sistema de arquivos (módulo nativo)

// constante que monitora requisições e recebe dois parâmetros req (requisição) e res (resposta)

// const monitorRequisicao = function(){}

// mesma coisa que...

// const monitorRequisicao = () => {} // arrow function

const monitorRequisicao = (req, res) => {
    // Configurando o cabeçalho da resposta para trabalhar com arquivos HTML e charset-utf-8
    res.writeHead(200, {"Content-Type" : "text/html; charset=utf8"});
    // Avaliando cada requisição (a partir do link)
    switch(req.url){
        case '/':
            // fs faz o carregamento e leitura do arquivo
            fs.readFile('paginas/index.html')
            // depois de pronto, envia o conteudo como resposta
            .then(conteudo => res.end(conteudo));
            // exibir index.html
        break;

        case '/sobre':
            fs.readFile('paginas/sobre.html').then(conteudo => res.end(conteudo));
        break;

        default:
            res.writeHead(404);
            fs.readFile('paginas/404.html').then(conteudo => res.end(conteudo));
        break;
    }
}

// Criando o servidor http e indicando a função de requisição
const servidor = http.createServer(monitorRequisicao);

// iniciando a escuta do servidor local na porta 8080
//servidor.listen(8080); // só esse trecho já seria o suficiente, mas é importante rodar a mensagem para ter certeza que tudo deu certo.

servidor.listen(8080, () => {
    console.log("Servidor node rodando normalmente.");
});
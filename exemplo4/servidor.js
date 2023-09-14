import http from 'http'; // importando módulo nativo http.

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
            // exibir index.html
        break;

        case '/sobre':
            // exibir sobre.html
        break;

        default:
            // exibir 404.html
        break;
    }
}

// Criando o servidor http e indicando a função de requisição
const servidor = http.createServer(monitorRequisicao);
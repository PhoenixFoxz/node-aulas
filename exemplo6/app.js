import express from 'express';


// armazenando o express em uma variável. Ao invés de chamar express().get, usaremos app.get;
const app = express();

// Configurar a view engine com EJS
app.set('view engine', 'ejs');

// Configurar as rotas de acesso

// Raiz
app.get('/', (req, res) => {

    const bandas = ['Justin Bieber', 'Ozzy Osbourne', 'Black Sabbath', 'AC/DC', "Guns N' Roses", 'Led Zeppelin', 'Metallica', 'Iron Maiden']
    res.render('paginas/index', {bandas});

    //res.send('Bem vindo ao servidor ExpressJS. Foi bem mais fácil do que parece')
});

// sobre
app.get('/sobre', (req, res) => {
    res.render('paginas/sobre');
});

// contato
app.get('/contato', (req, res) => {
    res.render('paginas/contato');
});


// Iniciar o servidor e escolher a porta 
app.listen(3000, () => {
    console.log('Servidor ExpressJS rodando normalmente.')
});
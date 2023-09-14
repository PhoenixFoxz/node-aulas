

let url = "https://jsonplaceholder.typicode.com/posts/10 "

// 1) Conectando com o endpoint da API (url)
fetch(url)
// 2) Retornando a resposta com JSON
.then(resposta => resposta.json())
// 3) exibindo no console dados obtidos na API
.then(dados => console.log(dados));
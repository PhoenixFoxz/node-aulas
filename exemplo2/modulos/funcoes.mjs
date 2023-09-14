function soma(valor1, valor2) {
    return valor1 + valor2;
}

function multiplica(valor1, valor2) {
    return valor1 * valor2;
}

function divide(valor1, valor2) {
    return valor1 / valor2;
}

function subtrai(valor1, valor2) {
    return valor1 - valor2;
}

// export default soma;     // para exportar um único recurso
export { soma, multiplica, divide, subtrai };   // para exportar diversos recursos

// se desejar exportar de uma maneira que facilite a importação:
// const operacoes = { soma, multiplica, divide, subtrai };
// export default operacoes; */
// IMPORTANTE: se exportar desta maneira, na hora de chamar o recurso, precisaremos usar a sintaxe operacoes.soma, por exemplo.
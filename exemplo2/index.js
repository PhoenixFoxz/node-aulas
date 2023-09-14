// import soma from './modulos/funcoes.mjs';    // importando um único recurso
import {soma, multiplica, divide, subtrai} from './modulos/funcoes.mjs';

let resultadoSoma = soma(10, 50);
let resultadoMultiplica = multiplica(2, 10);
let resultadoDivide = divide(120, 2);
let resultadoSubtrai = subtrai(97, 12);

console.log(`Soma: ${resultadoSoma}`);
console.log(`Multiplicação: ${resultadoMultiplica}`);
console.log(`Divisão: ${resultadoDivide}`);
console.log(`Subtração: ${resultadoSubtrai}`);
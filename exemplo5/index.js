import chalk from 'chalk'; // importação do módulo instalado

console.log("Gerenciamento de Pacotes");

let aluno = 'Jão Gomes';
let idade = 17;

if (idade >= 18) {
    console.log(chalk.bgBlueBright.bold(`${aluno} é maior de idade`))
} else {
    console.log(chalk.bgRedBright.bold(`${aluno} é menor de idade`))
};
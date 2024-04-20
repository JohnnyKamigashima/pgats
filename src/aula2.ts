let nome = "julio";
nome = '\nyubram';

console.clear();
const idade = 37;
console.log(`\n${nome} tem ${idade} anos de idade\n`);

let salario = 5000;
console.log(`\n${nome} tem um salário de ${salario++} reais\n`);
console.log(`\n${nome} tem um salário de ${++salario} reais\n`);

const listaNomeFerramentasDeAutomacao = [
    'Cypress',
    'Playwright',
    'Puppeteer',
    'Selenium',
];

for (let nomeFerramentasDeAutomacao of listaNomeFerramentasDeAutomacao) {
    console.log(nomeFerramentasDeAutomacao);
}

/* 

Crie uma variavel que possui o valor 5.
Depois crie um vetror que possui 2 itens;
1) soma de 5 + a variavel
2) subtracao de 5,99 menos a variaval
Apresente o valor dos itens do vetor no Console.
Depoiois some os dois itens
Depopis apreernte um texto dizendo:
O restultado final é [resultado]

*/
console.clear();
const variavel = 5;
const vetorFinal = [5 + variavel, 5.99 - variavel];
let resultadoFinal = 0;

for (let vetorValor of vetorFinal) {
    console.log(vetorValor.toFixed(2));
    resultadoFinal += vetorValor;
}

console.log(`\nO resultado final é ${resultadoFinal}\n`);

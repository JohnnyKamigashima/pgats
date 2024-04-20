/*
Hands-on
Precisamos de um software que seja capaz de calcular o índice de massa corporal de um ser humano com idade entre 20 e 60 anos. Use pensamento computacional para identificar a solução do problema e depois converta o algoritmo para Javascript.Hands-on
Precisamos de um software que seja capaz de calcular o índice de massa corporal de um ser humano com idade entre 20 e 60 anos. Use pensamento computacional para identificar a solução do problema e depois converta o algoritmo para Javascript.

VALORES DO IMC: PESSOAS DE 20 A 60 ANOS 
| VALOR DO IMC | CLASSIFICAÇÃO |
| Menor que 18,5 | Baixo peso  | 
| De 18,5 a 24,99 | Normal     | 
| De 25 a 29,99 | Sobrepeso    | 
| Maior que 30 | Obesidade     | 

| Pensamento Algorítmico                             |
| -------------------------------------------------- |
| 1. Obter tabela de imc                             |
| 2. Obter idade da pessoa                           |
| 3. Finalizar se estiver fora do intervalo de idade |
| 4. Obter peso da pessoa                            |
| 5. Obter altura da pessoa                          |
| 6. Calcular IMC                                    |
| 7. Verificar qual classificação do IMC na tabela   |
| 8. Mostrar resultado                               |

A fórmula para calcular o Índice de Massa Corporal (IMC) é:

IMC = peso (kg) / (altura (m))^2

Onde: peso é a massa corporal da pessoa em quilogramas
altura é a estatura da pessoa em metros

*/

import { validaAltura } from "./exercicio01-altura";
import { verificaIdade } from "./exercicio01-idade";
import { imc, classificaIMC } from "./exercicio01-imc";
import { corrigeNumero } from "./exercicio01-common";

// Execução do desafio

// 1. Obter tabela de imc 
const tabelaDeImc = [
    { valorMinimo: null, valorMaximo: 18.5, classificacao: 'Baixo peso' },
    { valorMinimo: 18.5, valorMaximo: 24.99, classificacao: 'Normal' },
    { valorMinimo: 25, valorMaximo: 29.99, classificacao: 'Sobrepeso' },
    { valorMinimo: 30, valorMaximo: null, classificacao: 'Obesidade' }
]

let idadePessoa, peso, altura;

// Obtem parametros de execucao se existitem
if (process.argv[2]) {
    const argumentos = JSON.parse(process.argv[2]);

    if (argumentos.idade) idadePessoa = corrigeNumero(argumentos.idade);
    else console.log('O parâmetro idade da pessoa não foi informado, será usado valor padrão');

    if (argumentos.altura) altura = argumentos.altura;
    else console.log('O parâmetro altura da pessoa não foi informado, será usado valor padrão');

    if (argumentos.peso) peso = argumentos.peso;
    else console.log('O parâmetro peso da pessoa não foi informado, será usado valor padrão');
} else {
    console.log(`Os parâmetros '{"idade":0, "altura":0, "peso":0}' da pessoa não foram informados, será usado valores padrões`);
}

//  2. Obter idade da pessoa
idadePessoa = (idadePessoa) || 30;

// 3. Finalizar se estiver fora do intervalo de idade
if (!verificaIdade(idadePessoa)) {
    throw new Error('\nIdade fora do intervalo permitido');
}

// 4. Obter peso da pessoa
peso = (peso) || 80;

// 5. Obter altura da pessoa  pode ser em numero inteiro, quebrado, em string separado por . ou virgula
altura = (altura) || "1,50";

// Valida a altura da pessoa
const alturaConvertida = corrigeNumero(altura);
const pesoConvertido = corrigeNumero(peso);

console.log(`\nArgumentos:\n\nIdade: ${idadePessoa}\nAltura: ${altura.toString().replace(',', '.')}\nPeso: ${peso.toString().replace(',', '.')}`);

if (!validaAltura(alturaConvertida)) {
    throw new Error('\nAltura fora do intervalo permitido');
}

//  6. Calcular IMC 
const imcResultado = imc(pesoConvertido, alturaConvertida);

//  7. Verificar qual classificação do IMC na tabela 
const classificacaoIMC = classificaIMC(tabelaDeImc, imcResultado);

// 8. Mostrar resultado
console.log(`\nIMC para peso ${pesoConvertido}kg e altura ${altura}m: ${imcResultado} a classificação do IMC é de ${classificacaoIMC}\n`);


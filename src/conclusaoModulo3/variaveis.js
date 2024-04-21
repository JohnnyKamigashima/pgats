/**
 *  O JS possui vários tipos de variáveis e como não é uma linguagem fortemente tipada, ela aceita que seja atribuída um valor de um tipo diferente do que foi declarado inicialmente.
 * 
 * As variáveis inicializadas como constantes (const) são imutáveis, ou seja, não podem ser alteradas durante o programa. Porém desde que não haja uma atribuição direta o valor interno pode ser alterado indiretamente.
 * 
 * As variáveis inicializadas como variáveis (var) podem ser alteradas durante o programa e possuem um escopo ampliado, podendo ser lidas em partes fora do seu escopo.
 * 
 * O tipo comum de variável é inicializado com let, e este tipo pode ser alterado através de atribuições ao longo da execução do programa.
 */

/**
 * Tipo de variáveis:
 *  */

// Booleano só possui dois estados: verdadeiro e falso
const booleanoVerdadeiro = true;
const booleanoFalso = false;

// numérico pode ser de valores inteiros ou decimais
const numeroInteiro = 100;
const numeroDecimal = 10.5;
const numeroNegativo = -10;

// string é uma sequência de caracteres, geralmente conhecida como texto, ele também pode ser interpretada como um vetor linear de caracteres que podem formar frases ou não

const frase = 'Isso é uma string';
const uuid = '5b0b6a6c-9e9b-4f6d-9b3f-6f4b5d6c7e8f';
const stringNumerica = '10';

// Undefined - indica que a variável foi declarada mas não teve um valor definido

let indefinido

// Null(nulo) - indica que a variável não possui nenhum valor

const valornulo = null

// Objeto - estruturas que representam objetos com propriedades, eles podem conter diversos outros tipos de variaveis

const animalEstimacao = {
    nome: 'Toothless',
    idade: undefined,
    cor: ['preto', 'dourado', 'castanho'],
    vacinado: true,
    garras: 20,
    orelhas: null,
    voar: () => {
        console.log('Voando');
    }
}

// Função é um tipo especial de variável que executa alguma ação ela pode ser atribuída como uma função anônina a uma variável com ou sem nome

function funcao() { return true }
const funcaoAnonima = function () { return true }
const arrowFunction = () => { return true }

// Vetor é uma lista de valores e podee possuir diversas dimensões (matriz) ela pode ser uma lista dentro de uma lista ou uma lista de objetos 

const vetor = [1, 2, 3, 4, 5]
const matriz = [[1, 2], [3, 4], [5, 6]]
const vetorObjeto = [{ nome: 'Fulano', idade: 20 }, { nome: 'Ciclano', idade: 30 }]
const matrizObjeto = [[{ nome: 'Fulano', idade: 20 }, { nome: 'Ciclano', idade: 30 }], [{ nome: 'Beltrano', idade: 40 }, { nome: 'Deltrano', idade: 50 }]]

module.exports = {
    booleanoVerdadeiro,
    booleanoFalso,
    numeroInteiro,
    numeroDecimal,
    numeroNegativo,
    frase,
    uuid,
    stringNumerica,
    indefinido,
    valornulo,
    animalEstimacao,
    funcao,
    funcaoAnonima,
    arrowFunction,
    vetor,
    matriz,
    vetorObjeto,
    matrizObjeto,
}
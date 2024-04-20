const { Calculadora } = require('../../src/exercicio01/Calculadora');
const assert = require('assert');
const calculadora = new Calculadora();

describe('Teste de calculadora', () => {
    const numerosTesteSoma = [[1, 1, 2], [1, 0, 1], [0, 1, 1], [0, 0, 0]]
    const numerosTesteDivisao = [[1, 1, 1], [1, 0, Infinity], [0, 1, 0], [0, 0, NaN], [2, 2, 1], [3, 2, 1.5], [100, 3, 33.333333333333336]]

    for (let numero of numerosTesteSoma) {
        it(`Soma dois números ${numero[0]} + ${numero[1]} deve ser ${numero[2]}`, () => {
            assert.equal(calculadora.somaDoisNumeros(numero[0], numero[1]), numero[2])
        });
    }

    for (let numeroDiv of numerosTesteDivisao) {
        it(`Divide dois números ${numeroDiv[0]} / ${numeroDiv[1]} deve ser ${numeroDiv[2]}`, () => {
            assert.equal(calculadora.divisaoDoisNumeros(numeroDiv[0], numeroDiv[1]), numeroDiv[2])
        });
    }
})
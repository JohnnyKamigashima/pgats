const assert = require('node:assert');
const { verificaIdade } = require('../../src/exercicio01/funcoes/idade')
const { validaAltura } = require('../../src/exercicio01/funcoes/altura')
const { imc } = require('../../src/exercicio01/funcoes/imc')
const { validaPesoValido } = require('../../src/exercicio01/funcoes/peso')

context('Teste de exercício 01', () => {
    describe('Teste se o validador de idade funciona', () => {
        const data = [[19, false], [20, true], [60, true], [61, false]]
        data.forEach((dado) => {
            it(`Testando se a idade ${dado[0]} e ${dado[1]}`, () => {
                assert.equal(verificaIdade(dado[0]), dado[1])
            })
        })
    })

    describe('Teste se o validador de altura funciona', () => {
        const data = [[1.80, true], ['1.74', true], ['1,50', true], ['0,10', false], ['3', false]]
        data.forEach((dado) => {
            it(`Testando se a altura ${dado[0]} e ${dado[1]}`, () => {
                assert.equal(validaAltura(dado[0]), dado[1])
            })
        })
    })

    describe('Verifica se o calculo de IMC esta correto', () => {
        const data = [[80, 1.80, 24.69],
        [74, 1.20, 51.39],
        [83, 1.72, 28.06]]

        data.forEach((dado) => {
            it(`Testando se o IMC de Peso ${dado[0]} e Altura ${dado[1]} é ${dado[2]}`, () => {
                assert.equal(imc(dado[0], dado[1]), dado[2])
            })
        })
    })

    describe('Verifica se o peso é valido', () => {
        const data = [
            [30, false],
            [31, true],
            [299, true],
            [300, false]]

        for (let item of data) {
            it(`Testando se o peso ${item[0]} é ${item[1]}`, () => {
                assert.equal(validaPesoValido(item[0]), item[1])
            })
        }
    })
})
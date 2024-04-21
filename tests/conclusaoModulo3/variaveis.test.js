const { describe, it } = require('mocha')
const assert = require('node:assert')
const { booleanoVerdadeiro,
    booleanoFalso,
    numeroInteiro,
    numeroDecimal,
    numeroNegativo,
    frase,
    uuid,
    stringNumerica,
    stringData,
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
    data } = require('../../src/conclusaoModulo3/variaveis')

describe('Conclusão Módulo 3 - Variáveis', () => {
    it('Verifica se o booleano verdadeiro é mesmo boolean', () => {
        assert.strict(typeof (booleanoVerdadeiro),
            Boolean)
    })
    it('Verifica se o booleano falso é mesmo falso', () => {
        assert.equal(booleanoFalso, false)
    })
    it('Verifica se o numero inteiro é igual a 100', () => {
        assert.equal(numeroInteiro, 100)
    })
    it('Verifica se o numero decimal é número', () => {
        assert.strict(typeof (numeroDecimal), Number)
    })
    it('Verifica se o numero negativo é igual a -10', () => {
        assert.equal(numeroNegativo, -10)
    })
    it('Verifica se a frase é igual a "Isso é uma string"', () => {
        assert.equal(frase, 'Isso é uma string')
    })
    it('Verifica se o UUID é string"', () => {
        assert.strict(typeof (uuid), String)
    })
    it('Verifica se a string numerica é igual a "10"', () => {
        assert.equal(stringNumerica, '10')
    })
    it('Verifica se o indefinido é igual a undefined', () => {
        assert.equal(indefinido, undefined)
    })
    it('Verifica se o valornulo é igual a null', () => {
        assert.equal(valornulo, null)
    })
    it('Verifica se o nome do animalEstimacao é igual a Toothless', () => {
        assert.equal(animalEstimacao.nome, 'Toothless')
    })
    it('Verifica se o vacinado do animalEstimacao é igual a true', () => {
        assert.ok(animalEstimacao.vacinado)
    })
    it('Verifica se a funcao retorna true', () => {
        assert.ok(funcao())
    })
    it('Verifica se a funcaoAnonima retorna true', () => {
        assert.ok(funcaoAnonima())
    })
    it('Verifica se a arrowFunction retorna true', () => {
        assert.ok(arrowFunction())
    })
    it('Verifica se o tericeiro item do vetor é 3', () => {
        assert.equal(vetor[2], 3)
    })
    it('Verifica se o segundo item do terceiro item da matriz é 6', () => {
        assert.equal(matriz[2][1], 6)
    })
    it('Verifica se o nome do segundo Objeto do vetor de objeto é Ciclano', () => {
        assert.equal(vetorObjeto[1].nome, 'Ciclano')
    })
    it('Verifica se a idade do segundo Objeto do segundo item da matriz de objeto é 50', () => {
        assert.equal(matrizObjeto[1][1].idade, 50)
    })
})
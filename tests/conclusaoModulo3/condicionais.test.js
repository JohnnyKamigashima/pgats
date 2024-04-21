const { describe, it } = require('mocha')
const assert = require('node:assert')
const { falso, ouVerdadeiro, eFalso, verificaMaioridade, mesDoAno } = require('../../src/conclusaoModulo3/condicionais')

describe('Conclusão Módulo 3 - Condicionais', () => {
    it(`Verifica se falso é falso`, () => {
        assert.equal(falso, false)
    })

    it(`Verifica se ouVerdadeiro é verdadeiro`, () => {
        assert.ok(ouVerdadeiro)
    })

    it(`Verifica se eFalso é falso`, () => {
        assert.equal(eFalso, false)
    })

    it(`Verifica se é adulto`, () => {
        assert.equal(verificaMaioridade(30), 'ADULTO')
    })

    it(`Verifica se é criança`, () => {
        assert.equal(verificaMaioridade(9), 'CRIANÇA')
    })

    it(`Verifica se mes 4 é abril`, () => {
        assert.equal(mesDoAno(4), 'Abril')
    })
})
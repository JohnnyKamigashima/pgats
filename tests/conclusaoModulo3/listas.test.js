const { describe, it } = require('mocha')
const assert = require('node:assert')
const { listaDesordenada, listaVazia, frutas } = require('../../src/conclusaoModulo3/listas')

describe('Faz testes sobre listas', () => {
    it('Verifica se o quinto item da lista desordenada é 6', () => {
        assert.equal(listaDesordenada[4], 6)
    })

    it('Verifica se a lista vazia é igual a []', () => {
        assert.deepEqual(listaVazia, [])
    })

    it(`Verifica se Banana está na lista de frutas`, () => {
        assert.ok(frutas.includes('banana'))
    })

    it(`Verifica se o sexto item da lista é nulo`, () => {
        assert.equal(frutas[5], null)
    })

})
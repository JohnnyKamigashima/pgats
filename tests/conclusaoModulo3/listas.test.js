const { describe, it } = require('mocha')
const assert = require('node:assert')
const { listaDesordenada, listaOrdenada, listaVazia, frutas } = require('../../src/conclusaoModulo3/listas')

describe('Faz testes sobre listas', () => {
    it('Verifica se o quinto item da lista desordenada é 6', () => {
        assert.equal(listaDesordenada[4], 6)
    })
    it('Verifica se a lista ordenada é igual a [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]', () => {
        assert.deepEqual(listaOrdenada, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
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
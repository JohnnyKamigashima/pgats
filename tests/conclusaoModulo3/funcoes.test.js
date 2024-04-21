const { describe, it } = require('mocha')
const assert = require('node:assert')
const { espere, raizQuadrada } = require('../../src/conclusaoModulo3/funcoes')

describe('Conclusão Módulo 3 - Funções', () => {
    it('Verifica se a raiz quadrada de 4 é 2', () => {
        assert.equal(raizQuadrada(4), 2)
    })

    it('Verifica se o teste da função espere passou', async () => {
        await espere().then((resultado) => {
            assert.equal(true, resultado)
        })
    })
})
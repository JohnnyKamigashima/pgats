const { describe, it } = require('mocha')
const assert = require('node:assert')
const Casa = require('../../src/conclusaoModulo3/classes')

describe('Conclusão Módulo 3 - Classes', () => {
    const casa = new Casa('Azul', 10, 3)
    it('Verifica se a casa é azul', () => {
        assert.equal(casa.cor, 'Azul')
    })

    it('Verifica se a casa tem 10 portas', () => {
        assert.equal(casa.portas, 10)
    })

    it('Verifica se a casa tem 3 wc', () => {
        assert.equal(casa.wc, 3)
    })

    it('Verifica se a casa tem 220 tensão', () => {
        assert.equal(casa.tensao, 220)
    })

    it('Verifica se a porta foi aberta', () => {
        assert.equal(Casa.abrePorta(), true)
    })
})
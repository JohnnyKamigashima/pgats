const { describe, it } = require('mocha')
const assert = require('node:assert')
const Casa = require('../../src/conclusaoModulo3/classes')

describe('Conclusão Módulo 3 - Classes', () => {
    const casa = new Casa()
    it('Verifica se a casa é Branca', () => {
        assert.equal(casa.cor, 'Branca')
    })

    it('Verifica se a casa tem 8 portas', () => {
        assert.equal(casa.portas, 8)
    })

    it('Verifica se a casa tem 2 wc', () => {
        assert.equal(casa.wc, 2)
    })

    it('Verifica se a casa tem 220 tensão', () => {
        assert.equal(casa.tensao, 220)
    })

    it('Verifica se a porta foi aberta', () => {
        assert.equal(Casa.abrePorta(), true)
    })
})
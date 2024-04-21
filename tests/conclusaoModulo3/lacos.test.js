const { describe, it } = require('mocha')
const assert = require('node:assert')
const { contaOvelhas, somaItensDaLista, mostrarResultados, sorteieNumerosBingo, mostreUmCaoEnquantoVerdade, mapeiaId } = require('../../src/conclusaoModulo3/lacos')
describe('Conclusão Módulo 3 - Lacos', () => {
    it('Conta 33 ovelhas usando laços', () => {
        assert.equal(contaOvelhas(33), 33)
    })

    it('Soma os itens de uma lista usando laços', () => {
        assert.equal(somaItensDaLista([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 55)
    })

    it('Mostra os resultados de uma lista usando laços', () => {
        assert.ok(mostrarResultados(['bom', 'razoavel', 'ruim', 'ruim', 'medíocre']))
    })

    it('Sorteie 24 numeros do BINGO', () => {
        assert.ok(sorteieNumerosBingo(24).length === 24)
    })

    it('Mostre um numero enquanto for true', () => {
        assert.equal(mostreUmCaoEnquantoVerdade([true, true, true, true, false, true]), 4)
    })

    it('Faz uma lista de ids de objetos', () => {
        assert.strict(mapeiaId([{ id: 1, nome: 'Ciclano' }, { nome: 'Fulano', id: 2 }, { id: 3 }]), [1, 2, 3])
    })
})
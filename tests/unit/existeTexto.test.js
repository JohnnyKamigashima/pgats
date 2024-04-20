const assert = require('assert')
const { existeTexto } = require('../../src/exercicio01/funcoes/existeTexto')

describe('Deve testar a funcao de existe texto dentro de uma array', () => {
    describe('Testa a funcao existeTexto passando uma array e um string', () => {
        const listaItens = [
            'Playstation 3',
            'Playstation 5',
            'Playstation 4',
            'Xbox Series X',
            'Xbox Series S',
            'Nintendo Switch',
            'Trakinas'
        ]
        const itemAProcurar = [
            ['Playstation 3', true],
            ['PlayStation 3', false],
            ['Play Station 3', false],
            ['PLAY Station 3', false],
            ['play Station 3', false],
            ['pLaY StAtIoN 3', false],
            ['Oreo', false]
        ]

        for (let item of itemAProcurar) {
            it(`Testa se ${item[1] ? 'existe' : 'nao existe'} o texto ${item[0]} dentro da array`, () => {
                assert.equal(existeTexto(listaItens, item[0]), item[1])
            })
        }
    })
})
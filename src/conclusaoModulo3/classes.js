class Casa {
    cor = 'Branca'
    portas = 8
    wc = 2
    #tensao = 220

    constructor(cor, portas, wc) {
        this.cor = cor
        this.portas = portas
        this.wc = wc
    }

    get tensao() {
        return this.#tensao
    }

    static abrePorta() {
        console.log('Porta aberta')
        return true
    }
}

module.exports = Casa;
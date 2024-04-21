class Casa {
    cor = 'Branca'
    portas = 8
    wc = 2
    #tensao = 220

    get tensao() {
        return this.#tensao
    }

    static abrePorta() {
        console.log('Porta aberta')
        return true
    }
}

module.exports = Casa;
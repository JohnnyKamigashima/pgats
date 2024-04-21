/**
 * Lacos de repetição serve para repetir operações ou iterar sobre elementos de uma lista, array ou objeto.
 * 
 * Os laços mais usados são For, For...Of e For...In
 * While, Do...While.
 * Algumas classes possuem lacos incorporadas em seus métodos ou aceitam o uso de funções de callback que aplicam laços que fazem a iteração entre seus elementos como forEach e array.map.
 */
const nomesAleatorios = () => {
    const listaNomes = ['Miguel', 'Davi', 'Arthur', 'Pedro', 'Gabriel', 'Bernardo', 'Lucas', 'Matheus', 'Rafael', 'Heitor', 'Enzo', 'Guilherme', 'Nicolas', 'Lorenzo', 'Gustavo', 'Felipe', 'Samuel', 'João Pedro', 'Daniel', 'Vitor', 'Leonardo', 'Henrique', 'Theo', 'Murilo', 'Eduardo', 'Pedro Henrique', 'Pietro', 'Cauã', 'Isaac', 'Caio', 'Vinicius', 'Benjamin', 'João', 'Lucca', 'João Miguel', 'Bryan', 'Joaquim', 'João Vitor', 'Thiago', 'Antônio', 'Davi Lucas', 'Francisco', 'Enzo Gabriel', 'Bruno', 'Emanuel', 'João Gabriel', 'Ian', 'Davi Luiz', 'Rodrigo', 'Otávio', 'Sophia', 'Alice', 'Julia', 'Isabella', 'Manuela', 'Laura', 'Luiza', 'Valentina', 'Giovanna', 'Maria Eduarda', 'Helena', 'Beatriz', 'Maria Luiza', 'Lara', 'Mariana', 'Nicole', 'Rafaela', 'Heloísa', 'Isadora', 'Lívia', 'Maria Clara', 'Ana Clara', 'Lorena', 'Gabriela', 'Yasmin', 'Isabelly', 'Sarah', 'Ana Julia', 'Letícia', 'Ana Luiza', 'Melissa', 'Marina', 'Clara', 'Cecília', 'Esther', 'Emanuelly', 'Rebeca', 'Ana Beatriz', 'Lavínia', 'Vitória', 'Bianca', 'Catarina', 'Larissa', 'Maria Fernanda', 'Fernanda', 'Amanda', 'Alícia', 'Carolina', 'Agatha', 'Gabrielly']
    const numeroAleatorio = Math.floor(Math.random() * listaNomes.length)

    return listaNomes[numeroAleatorio]
}

// For
const contaOvelhas = (quantidadeDeOvelhas) => {
    let ovelhasContadas = 0

    for (let contador = 0; contador < quantidadeDeOvelhas; contador++) {
        console.log(`Ovelha ${nomesAleatorios()} número ${contador + 1}`)
        ovelhasContadas = contador + 1
    }
    return ovelhasContadas
}

const somaItensDaLista = (listaDeNumeros) => {
    let resultado = 0

    for (const item of listaDeNumeros) {
        resultado += item
    }
    return resultado
}

const mostrarResultados = (lista) => {
    for (let indice in lista) {
        console.log(`${indice} teve o resultado ${lista[indice]}`)
    }
    return true
}

const sorteieNumerosBingo = () => {
    let b = []
    let i = []
    let n = []
    let g = []
    let o = []
    const coluna = 5
    let sorteado = Math.floor(Math.random() * 74) + 1
    let comprimento = 0
    let mensagem

    while (comprimento <= 23) {
        comprimento = b.length + i.length + n.length + g.length + o.length
        mensagem = `O ${comprimento} valor Sorteado é ${sorteado}`

        if (sorteado <= 15 && b.length < coluna) {
            b.push(sorteado)
            console.log(mensagem)
        } else if (sorteado > 15 && sorteado <= 30 && i.length < coluna) {
            i.push(sorteado)
            console.log(mensagem)
        } else if (sorteado > 30 && sorteado <= 45 && n.length < coluna - 1) {
            n.push(sorteado)
            console.log(mensagem)
        } else if (sorteado > 45 && sorteado <= 60 && g.length < coluna) {
            g.push(sorteado)
            console.log(mensagem)
        } else if (sorteado > 60 && sorteado <= 75 && o.length < coluna) {
            o.push(sorteado)
            console.log(mensagem)
        }
        sorteado = Math.floor(Math.random() * 74) + 1
    }
    console.log(`B = ${b}`)
    console.log(`I = ${i}`)
    console.log(`N = ${n}`)
    console.log(`G = ${g}`)
    console.log(`O = ${o}`)
    return (b + ',' + i + ',' + n + ',' + g + ',' + o).split(',')
}

const mostreUmaPessoaEnquantoVerdade = (lista) => {
    let contador = 0
    do {
        console.log(`Número ${Math.floor(Math.random() * 100)} ${nomesAleatorios()}`)
        contador++
    } while (lista[contador])
    return contador
}

module.exports = { contaOvelhas, somaItensDaLista, mostrarResultados, sorteieNumerosBingo, mostreUmaPessoaEnquantoVerdade }
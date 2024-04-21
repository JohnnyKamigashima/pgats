/**
 * Listas são conjuntos de dados que podem ser alterados ou adicionados durante a execução do programa. Eles podem ser ordenados e possuem um índice.
 */

const listaDesordenada = [3, 1, 2, 4, 6, 7, 5, 9, 8, 10]
const listaOrdenada = listaDesordenada.toSorted((a, b) => a - b)
const listaVazia = []
const frutas = ['banana', 'maca', 'laranja', 'uva', 'abacaxi', null]

module.exports = { listaDesordenada, listaOrdenada, listaVazia, frutas }    
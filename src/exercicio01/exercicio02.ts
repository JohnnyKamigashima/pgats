/* Exercício 2
Estruturas de programação

Hands - on

Crie uma função que retorna true caso um texto pesquisado seja um dos itens de um vetor fornecido.A função deve estar dentro de um arquivo e o uso dela deve estar em outro arquivo no qual teremos um condicional que mostra o texto "Achou" em casos onde a função retorna true.
*/

/*
- Criar uma função que retorna true caso um texto pesquisado seja um dos itens de um vetor fornecido.
    - deve receber um vetor e um texto
    - deve retornar um booleano
    - deve verificar se o texto está dentro do vetor

- A funcao deve estar em um arquivo e o uso dela deve estar em outro arquivo no qual teremos um condicional que mostra o texto "Achou" em casos onde a função retorna true.
*/

// Função que verifica se um texto está dentro de um vetor
import { estaDentroDoVetor } from './exercicio02-funcoes.js'
const vetor = ['mouse', 'teclado', 'caneca', 'cafe']
const listaItems = ['mouse', 'teclado', 'caneca', 'cafe', 'leite', 'pão', 'coca-cola']

for (let item of listaItems)
    console.log(
        await estaDentroDoVetor(item, vetor)
            ? 'Achou'
            : 'Não achou'
    )


/*
1. Um vetor com 3 coisas favoritas
2. e uma matrizque represente a tabela abaixo
| 7 | 8 | 9 |
| 4 | 5 | 6 |
| 1 | 2 | 3 |
| # | 0 | * |

*/

const comidasFavoritas = [
    'Sorvete',
    'Picanha',
    'Pão'
];

const dial = [
    ['7', '8', '9'],
    ['4', '5', '6'],
    ['1', '2', '3'],
    ['#', '0', '*']
];

console.log(`\nGosto muito de:`);

for (let comidaFavorita of comidasFavoritas) {
    console.log(`${comidaFavorita} e `);
}

console.log(`\nNumeros contidos no meio da matriz:`);

dial.forEach((dialLine) => {
    dialLine.forEach((dialButton, index) => {
        if (index == 1) console.log(`${dialButton} e `);
    });
});

/*
    Construa um vetor com 5 objetos que estão na sala onde você está agora
    cada um dos objetos deverá ter suas propriedades (ex. tamanho, cor, nome, etc.)
    Depois disso, escreva no console quais são as informações relacionadas a 
    cada um dos objetos que você colocou no vetor.
*/
const quarto = [
    { nome: 'Ventilador', peso: .500, cor: 'Preto', tensao: '110' },
    { nome: 'Cadeira', peso: 1.5, cor: 'Preto' },
    { nome: 'Copo', peso: 0.2, cor: 'Cinza' },
    { nome: 'Computador', peso: 2, cor: 'Prata', tensao: '110' },
    { nome: 'Monitor', peso: 3, cor: 'Preto', tensao: '110/220' }
]
console.clear()
console.log(`\nObjetos do quarto:\n`);
quarto.forEach((objeto) => {
    const pesoFinal = objeto.peso < 1 ? objeto.peso * 1000 : objeto.peso;
    const tipoPeso = objeto.peso < 1 ? 'gramas' : 'quilos';

    if (objeto.tensao == undefined)
        console.log(`No quarto há um ${objeto.nome} de ${pesoFinal} ${tipoPeso} e de cor ${objeto.cor}`)
    else
        console.log(`No quarto há um ${objeto.nome} de ${pesoFinal} ${tipoPeso}, de cor ${objeto.cor} e de tensão ${objeto.tensao} v`);
})
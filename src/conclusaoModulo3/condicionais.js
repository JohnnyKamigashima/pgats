/**
 * Condicionais são utilizados para alterar o caminho de execução do programa ou para aplicar regras dde negócios, alterando ações ou valores a serem atribuídos.
 * 
 * As condicionais podem ser usadas com ou sem a ajuda de operadores lógicos para aumentar a complexidade da regra, e devem ser usados com cautela, pois aumenta a dificuldade de manutenção e também de teste.
 */

// Operadores lógicos && || !
// Operadores de comparação == != > < >= <=

const falso = !true
const ouVerdadeiro = true || false
const eFalso = true && false

// Condicionais if else
const verificaMaioridade = (idade) => {
    if (idade < 10) {
        return 'CRIANÇA'
    } else if (idade < 18) {
        return 'ADOLESCENTE'
    } else {
        return 'ADULTO'
    }
}

// Condicionais switch case
const mesDoAno = (mes) => {
    switch (mes) {
        case 1:
            return 'Janeiro'
        case 2:
            return 'Fevereiro'
        case 3:
            return 'Março'
        case 4:
            return 'Abril'
        case 5:
            return 'Maio'
        case 6:
            return 'Junho'
        case 7:
            return 'Julho'
        case 8:
            return 'Agosto'
        case 9:
            return 'Setembro'
        case 10:
            return 'Outubro'
        case 11:
            return 'Novembro'
        case 12:
            return 'Dezembro'
        default:
            return 'Mês inválido'
    }
}

module.exports = { falso, ouVerdadeiro, eFalso, verificaMaioridade, mesDoAno }  
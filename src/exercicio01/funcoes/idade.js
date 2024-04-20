/**
 * Retorna falso se a idade for fora do intervalo
 * @param idade Idade do individuo
 * @returns true se a idade estiver dentro do intervalo
 */
const verificaIdade = (idade) => {
    return (idade >= 20 && idade <= 60)
}

/**
 * Exibe se passou no teste ou não
 * @param idade Idade do individuo
 */
const verificaIdadeTeste = (idade, esperado) => {
    const mensagem = (verificaIdade(idade) == esperado)
        ? `Passou o teste da função verificaIdade`
        : `Não passou o teste da função verificaIdade`

    console.log(`${mensagem}`)
}

module.exports = { verificaIdade, verificaIdadeTeste }
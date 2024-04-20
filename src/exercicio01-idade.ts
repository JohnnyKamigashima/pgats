/**
 * Exibe se passou no teste ou não
 * @param idade Idade do individuo
 */
export const verificaIdadeTeste = (idade: number, esperado: boolean) => {
    const mensagem = (verificaIdade(idade) == esperado)
        ? `Passou o teste da função verificaIdade`
        : `Não passou o teste da função verificaIdade`

    console.log(`${mensagem}`)
}

/**
 * Retorna falso se a idade for fora do intervalo
 * @param idade Idade do individuo
 * @returns true se a idade estiver dentro do intervalo
 */
export const verificaIdade = (idade: number): boolean => {
    return (idade >= 20 && idade <= 60)
}
/**
 * Classifica o IMC
 * @param imc valor do imc
 * @returns classificação do imc
 */
export const classificaIMC = function (tabelaDeImc: any, imc: number): string {
    let result = ''

    tabelaDeImc.forEach((linha: any, indice: number) => {
        if (
            (indice == 0 && imc <= linha.valorMaximo) ||
            (imc >= linha.valorMinimo && imc <= linha.valorMaximo) ||
            (indice == tabelaDeImc.length - 1 && imc >= linha.valorMinimo)
        )
            result = linha.classificacao
    });

    return result
};

/**
 * Testa o calculo da função classificaIMC
 * @param imc valor do imc
 * @param classificacaoEsperada classificação esperada
 * @return {void}  Mostra na tela se passou ou não
 **/
export const classificaIMCTeste = (tabelaImc: any, imc: number, esperado: string) => {
    const mensagem = (classificaIMC(tabelaImc, imc) == esperado)
        ? `Passou o teste da função classificaIMC`
        : `Não passou o teste da função classificaIMC`
    console.log(`${mensagem}: ${classificaIMC(tabelaImc, imc)}`)
}

/**
 * @param peso Peso do individuo
 * @param altura Altura do individuo
 * @returns valor do imc com duas casas decimais
 */
export const imc = (peso: number, altura: number): number => {
    return Number((peso / (altura * altura)).toFixed(2));
}

/**
 * Testa o calculo da funcao IMC
 *
 * @param {number} peso Peso do individuo
 * @param {number} altura Altura do individuo
 * @param {number} valorEsperado O valor esperado
 * @return {void}  Mostra na tela se passou ou não
 */
export const imcTeste = (peso: number, altura: number, valorEsperado: number) => {
    const imcResultado = imc(peso, altura)
    const mensagem = (imcResultado == valorEsperado)
        ? 'Passou o teste da função imc'
        : 'Não passou o teste da função imc'

    console.log(`${mensagem} IMC = ${imcResultado}`)
}
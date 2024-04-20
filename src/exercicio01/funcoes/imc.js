/**
 * Classifica o IMC
 * @param imc valor do imc
 * @returns classificação do imc
 */
let classificaIMC = function (tabelaDeImc, imc) {
    let result = ''

    tabelaDeImc.forEach((linha, indice) => {
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
 * @param peso Peso do individuo
 * @param altura Altura do individuo
 * @returns valor do imc com duas casas decimais
 */
const imc = (peso, altura) => {
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
const imcTeste = (peso, altura, valorEsperado) => {
    const imcResultado = imc(peso, altura)
    const mensagem = (imcResultado == valorEsperado)
        ? 'Passou o teste da função imc'
        : 'Não passou o teste da função imc'

    console.log(`${mensagem} IMC = ${imcResultado}`)
}

/**
 * Testa o calculo da função classificaIMC
 * @param imc valor do imc
 * @param classificacaoEsperada classificação esperada
 * @return {void}  Mostra na tela se passou ou não
 **/
const classificaIMCTeste = (tabelaImc, imc, esperado) => {
    const mensagem = (classificaIMC(tabelaImc, imc) == esperado)
        ? `Passou o teste da função classificaIMC`
        : `Não passou o teste da função classificaIMC`
    console.log(`${mensagem}: ${classificaIMC(tabelaImc, imc)}`)
}

module.exports = { classificaIMC, classificaIMCTeste, imc, imcTeste }
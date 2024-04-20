const { corrigeNumero } = require('./corrigeNumero');
/**
 * Valida a altura da pessoa se foi inderida corretamente
 * @param altura Altura do individuo em metros
 */
const verificaAlturaTeste = (altura, esperado) => {
    const mensagem = (corrigeNumero(altura) == esperado)
        ? `Passou o teste da função verificaAltura`
        : `Não passou o teste da função verificaAltura`

    console.log(`${mensagem}`)
}
/**
 * Valida a altura da pessoa se é valida
 * @param altura Altura do individuo em metros
 */
const verificaAlturaValidaTeste = (altura, esperado) => {
    const mensagem = (validaAltura(altura) == esperado)
        ? `Passou o teste da função verificaAlturaValida`
        : `Não passou o teste da função verificaAlturaValida`

    console.log(`${mensagem}`)
}

/**
 * Valida se a altura e uma altura valida
 */
const validaAltura = (altura) => {
    return !((corrigeNumero(altura) <= 0.30 || corrigeNumero(altura) >= 3))
}

module.exports = { verificaAlturaTeste, verificaAlturaValidaTeste, validaAltura }
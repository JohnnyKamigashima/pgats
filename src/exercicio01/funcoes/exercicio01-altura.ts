import { corrigeNumero } from "./exercicio01-common"

/**
 * Valida a altura da pessoa se foi inderida corretamente
 * @param altura Altura do individuo em metros
 */
export const verificaAlturaTeste = (altura: any, esperado: number) => {
    const mensagem = (corrigeNumero(altura) == esperado)
        ? `Passou o teste da função verificaAltura`
        : `Não passou o teste da função verificaAltura`

    console.log(`${mensagem}`)
}

/**
 * Valida se a altura e uma altura valida
 */
export const validaAltura = (altura: number): boolean => {
    return !((altura <= 0.30 || altura >= 3))
}

/**
 * Valida a altura da pessoa se é valida
 * @param altura Altura do individuo em metros
 */
export const verificaAlturaValidaTeste = (altura: number, esperado: boolean) => {
    const mensagem = (validaAltura(altura) == esperado)
        ? `Passou o teste da função verificaAlturaValida`
        : `Não passou o teste da função verificaAlturaValida`

    console.log(`${mensagem}`)
}
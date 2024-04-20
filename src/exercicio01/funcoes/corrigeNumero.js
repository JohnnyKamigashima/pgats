
/**
 * Se a entrada for uma string com separador virgula, sera ajustada para ponto
 * @param altura  altura
 * @returns numero da altura
 */
const corrigeNumero = (altura) => {
    if (isNaN(altura)) return Number(altura.replace(',', '.'));
    else return altura;
};

module.exports = { corrigeNumero }
/**
 * Existem duas formas mais comuns de criar funções, as funções anônimas e as funções nomeadas.
 */

const espere = async () => {
    setTimeout(function () {
        console.log("Aguarde 1 segundo!");
    }, 1000);
    return true
}

function raizQuadrada(x) {
    return Math.sqrt(x);
}

module.exports = { espere, raizQuadrada }
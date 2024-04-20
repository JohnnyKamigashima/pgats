const existeTexto = (listaTextos, textoPesquisado) => {
    const quantidadeDeTextos = listaTextos.length;
    for (let indice = 0; indice < quantidadeDeTextos; indice++) {
        if (listaTextos[indice] == textoPesquisado) {
            return true;
        }
        return false;
    }
}

module.exports = { existeTexto }
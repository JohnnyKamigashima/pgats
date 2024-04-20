export const estaDentroDoVetor = (item: string, vetor: string[]): boolean => {
    // let resposta = false
    // for (let elemento of vetor) if (elemento == item) resposta = true
    // for (let indice in vetor) if (vetor[indice] == item) resposta = true
    //     return resposta

    return vetor.includes(item)
}
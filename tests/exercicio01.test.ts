import { verificaAlturaTeste, verificaAlturaValidaTeste } from '../src/exercicio01-altura';
import { imcTeste, classificaIMCTeste } from '../src/exercicio01-imc';
import { verificaIdadeTeste } from './../src/exercicio01-idade';

console.clear()
// teste do limite de idade
verificaIdadeTeste(19, false);
verificaIdadeTeste(20, true);
verificaIdadeTeste(60, true);
verificaIdadeTeste(61, false);

// teste do valor de altura
verificaAlturaTeste(1.80, 1.80);
verificaAlturaTeste('1.74', 1.74);
verificaAlturaTeste('1,50', 1.50);

// teste do calculo do IMC
imcTeste(80, 1.80, 24.69);
imcTeste(74, 1.20, 51.39);
imcTeste(83, 1.72, 28.06);

// testa verificacao de altura valida
verificaAlturaValidaTeste(1.76, true);
verificaAlturaValidaTeste(0.30, false);
verificaAlturaValidaTeste(3, false);

//teste de classificacao

const tabelaDeImc = [
    { valorMinimo: null, valorMaximo: 18.5, classificacao: 'Baixo peso' },
    { valorMinimo: 18.5, valorMaximo: 24.99, classificacao: 'Normal' },
    { valorMinimo: 25, valorMaximo: 29.99, classificacao: 'Sobrepeso' },
    { valorMinimo: 30, valorMaximo: null, classificacao: 'Obesidade' }
]

// valores limites
//    Baixo peso |      Normal    |    Sobrepeso    | Obesidade
// --------------|----------------|-----------------|---------------
//         18.49 | 18.5     24.99 | 25        29.99 | 30

classificaIMCTeste(tabelaDeImc, 18.49, 'Baixo peso');
classificaIMCTeste(tabelaDeImc, 18.5, 'Normal');
classificaIMCTeste(tabelaDeImc, 24.99, 'Normal');
classificaIMCTeste(tabelaDeImc, 25, 'Sobrepeso');
classificaIMCTeste(tabelaDeImc, 29.99, 'Sobrepeso');
classificaIMCTeste(tabelaDeImc, 30, 'Obesidade');

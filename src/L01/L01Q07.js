const Pilha = require("./Pilha")

function removerDuplicados(numeros) {
    let pilha = new Pilha(numeros.length);
    let auxiliar = new Pilha(numeros.length);
    let resultado = new Pilha(numeros.length);

    for (let i = numeros.length - 1; i >= 0; i--) {
        pilha.push(numeros[i]);
    }

    while (!pilha.isEmpty()) {
        let elemento = pilha.pop();
        let encontrado = false;

        let tempPilha = new Pilha(auxiliar.length());
        while (!auxiliar.isEmpty()) {
            let tempElemento = auxiliar.pop();
            
            tempPilha.push(tempElemento);
            if (tempElemento === elemento) {
                encontrado = true;
            }
        }
        while (!tempPilha.isEmpty()) {
            auxiliar.push(tempPilha.pop());
        }

        if (!encontrado) {
            auxiliar.push(elemento);
        }
    }
    while (!auxiliar.isEmpty()) {
        resultado.push(auxiliar.pop());
    }

    let saida = [];
    while (!resultado.isEmpty()) {
        saida.push(resultado.pop());
    }

    return saida;
}

module.exports = { removerDuplicados }
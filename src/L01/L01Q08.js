const Pilha = require("./Pilha");

class PilhaDePratos {
    constructor(tam = 5) {
        this.tam = tam;
        this.pilhas = [new Pilha(tam)];
    }

    empilha(dado) {
        let ultimaPilha = this.pilhas[this.pilhas.length - 1];
        if (ultimaPilha.isFull()) {
            ultimaPilha = new Pilha(this.tam);
            this.pilhas.push(ultimaPilha);
        }
        ultimaPilha.push(dado);
    }

    desempilha() {
        while (this.pilhas.length > 0) {
            let ultimaPilha = this.pilhas[this.pilhas.length - 1];
            if (ultimaPilha.isEmpty()) {
                this.pilhas.pop(); 
            } else {
                return ultimaPilha.pop();
            }
        }
        return null; 
    } 
}
module.exports = { PilhaDePratos };

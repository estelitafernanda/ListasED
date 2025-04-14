const { ListaSimplesmenteLigada } = require("./ListaSimplesmenteLigada");

class PilhaLista {
    constructor() {
        this.lista = new ListaSimplesmenteLigada();
    }

    push(dado) {
        this.lista.add(dado); 
    }

    pop() {
        if (!this.isEmpty()) {
            this.lista.removeFirst(); 
        } else {
            throw new Error("Empty Stack");
        }
    }

    top() {
        if (!this.isEmpty()) {
            return this.lista.head.proximo.dado;
        } else {
            throw new Error("Empty Stack");
        }
    }

    isEmpty() {
        return this.lista.isEmpty();
    }

    length() {
        return this.lista.length();
    }

    clear() {
        this.lista = new ListaSimplesmenteLigada();
    }
}
module.exports = { PilhaLista };
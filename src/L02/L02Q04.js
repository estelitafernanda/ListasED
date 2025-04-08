class FilaInter {
    constructor(tam = 5) {
        this.tam = tam;
        this.dados = new Array(tam + 1); 
        this.inicio = 0;
        this.fim = 0;
    }

    enqueue(dado) {
        if (this.isFull()) throw new Error("QueueOverFlow");
        this.dados[this.fim] = dado;
        this.fim = (this.fim + 1) % this.dados.length;
    }

    dequeue() {
        if (this.isEmpty()) throw new Error("QueueUnderFlow");
        const elemento = this.dados[this.inicio];
        this.inicio = (this.inicio + 1) % this.dados.length;
        return elemento;
    }

    length() {
        return (this.dados.length + this.fim - this.inicio) % this.dados.length;
    }

    isEmpty() {
        return this.inicio === this.fim;
    }

    isFull() {
        return (this.fim + 1) % this.dados.length === this.inicio;
    }

    toString() {
        let result = "[";
        let i = this.inicio;
        let count = this.length();
        while (count > 0) {
            result += `${this.dados[i]},`;
            i = (i + 1) % this.dados.length;
            count--;
        }
        result += "]";
        return result;
    }

    clear() {
        this.inicio = 0;
        this.fim = 0;
    }
}



function intercalarFilas(f1, f2){
    let aux = new FilaInter(f1.length() + f2.length())

    while(!f1.isEmpty()|| !f2.isEmpty()){
        if(!f1.isEmpty()){
            aux.enqueue(f1.dequeue());
        }

        if(!f2.isEmpty()){
            aux.enqueue(f2.dequeue());
        }  
    }
    return aux;
}

module.exports = { intercalarFilas, FilaInter };
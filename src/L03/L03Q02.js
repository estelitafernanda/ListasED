const { ListaSimplesmenteLigada } = require("./ListaSimplesmenteLigada");

class FilaLista {
    constructor(){
        this.lista = new ListaSimplesmenteLigada(); 
    }
    enqueue(dado){
        this.lista.append(dado);
    }
    dequeue(){
        if (this.isEmpty()){
            throw new Error ("QueueUnderFlow")
        }
        let inicio = this.front();
        this.lista.removeFirst();
        return inicio;

    }
    front(){
        if(this.isEmpty()){
            throw new Error("Empty queue")
        }
        return this.lista.head.proximo.dado;

    }
    isEmpty(){
        return this.lista.isEmpty();

    }
    length(){
        return this.lista.length();
    }
    clear(){
        while(!this.isEmpty){
            this.dequeue();
        }
    }
}
module.exports = { FilaLista };
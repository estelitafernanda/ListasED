const { Fila } = require("./Fila");

class Empresa{
    constructor(){
        this.fila = new Fila(10)
    }
    aguardo(){
        return this.fila.isEmpty();
    }
    carregamentoAtingido(){
        return this.fila.isFull();
    }
    chegada(caminhao){
        this.fila.enqueue(caminhao);
    }
    saida(){
        this.fila.dequeue();
    }
    toString(){
        return this.fila.toString();
    }
}
module.exports = {Empresa}
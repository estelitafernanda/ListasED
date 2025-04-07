class Fila{
    constructor(tam = 5){
        this.tam = tam ;
        this.dados = [];
        this.inicio = 0;
        this.fim = 0; 
    }
    enqueue(dado){
        if(this.isFull()) throw new Error("QueueOverFlow");
        this.dados[this.fim] = dado;
        if(this.fim === this.tam){
            this.fim = 0;
        } else {
            this.fim++; 
        }
    }
    dequeue(){
        if(this.isEmpty()) throw new Error("QueueUnderFlow");
        if(this.inicio === this.tam){
            this.inicio = 0;
        } else {
            this.inicio++;
        }
    }
    front(){
        if(!this.isEmpty()) return this.dados[this.inicio]; 
    }
    length(){
        if(this.isEmpty()) return 0;
        if(this.inicio < this.fim) return this.fim - this.inicio;
        return ((this.tam + 1 - this.inicio)) + (this.fim - 0); 
    }
    isEmpty(){
        return this.inicio === this.fim; 
    }
    isFull(){
        return this.length() === this.tam;
    }
    toString(){
        let result = "["

        for(let i = 0; i < this.fim; i++){
            result += `${this.dados[i]},`;
        }

        result += "]";

        return result;

    }
    clear(){
        this.inicio = 0;
        this.fim = 0; 
    }
}

module.exports = { Fila };
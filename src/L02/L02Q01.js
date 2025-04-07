const { Fila } = require("./Fila");

class Pilha2F{
    constructor(tam = 5){
        this.f1 = new Fila(tam);
        this.f2 = new Fila(tam);
    }
    push(dado){
        if(this.isFull()) throw new Error("StackOverFlow");
        while(this.f1.length() > 0){
            this.f2.enqueue(this.f1.dequeue());
        }
        this.f1.enqueue(dado);
        while(this.f2.length() > 0){
            this.f1.enqueue(this.f2.dequeue());
        }
    }
    pop(){
        return this.f1.dequeue(); 
    }
    peek(){
        return this.f1.front();
    }
    isEmpty(){
        return this.f1.isEmpty();
    }
    isFull(){
        return this.f1.isFull();
    }
    length(){
        return this.f1.length();
    }
    toString(){
        return this.f1.toString();
    }
}
module.exports = { Pilha2F }
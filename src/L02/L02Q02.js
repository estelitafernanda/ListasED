const Pilha = require("../L01/Pilha");

class FilaP{
    constructor(tam){
        this.p1 = new Pilha(tam);
        this.p2 = new Pilha(tam);
    }
    enqueue(dado){
        if(this.isFull()) throw new Error;
        while(this.p1.length() > 0){
            this.p2.push(this.p1.pop());
        }
        this.p1.push(dado);
        while(this.p2.length() > 0){
            this.p1.push(this.p2.pop());
        }
    }
    dequeue() {
        return this.p1.pop();
    }
    isEmpty(){
        return this.p1.isEmpty();
    }
    isFull(){
        return this.p1.isFull();
    }
    clear(){
        this.p1.clear();
    }
    length(){
        this.p1.length();
    }
    front(){
        return this.p1.top();
    }
    toString() {
        let result = "[";
        for(let i = this.p1.topo; i >= 0; i--){
            result += `${this.p1.dados[i]}`;
            if(i != 0){
                result += ", ";
            }

        }
        result += "]";
        return result; 
    }

}
module.exports = { FilaP };
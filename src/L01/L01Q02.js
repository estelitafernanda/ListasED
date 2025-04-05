class PilhaQ2{
    constructor(tam = 5){
        this.topoA = -1;
        this.topoB = tam;
        this.dados = [];
        this.tam = tam;  
    }
    isEmptyA(){
        return this.topoA === -1; 
    }
    isEmptyB(){
        return this.topoB === this.tam;
    }
    pushA(elemento){
        if(this.isFull()){
            throw new Error ("StackOverFlow")
        } else {
            this.dados[this.topoA] = elemento;
            this.topoA++;
        }
    }
    pushB(elemento){
        if(this.isFull()){
            throw new Error("StackOverFlow");
        }else {
            this.dados[this.topoB] = elemento;
            this.topoB--; 
        }

    }
    popA(){
        if(this.isEmptyA()){
            throw new Error("StackUnderFlow");
        }else {
            this.topoA--;
            return this.dados[this.topoA];
        }
    }
    popB(){
        if(this.isEmptyB()){
            throw new Error("StackUnderFlow");
        } else {
            this.topoB++;
            return this.dados[this.topoB]; 
        }
    }
    isFull(){
        if(this.topoA + 1 === this.topoB || this.topoB === this.topoA){
            return true;
        } else {
            return false; 
        }
    }

}
module.exports = PilhaQ2;
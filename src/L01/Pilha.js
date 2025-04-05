class Pilha{
    constructor(tam = 5){
        this.dados = [];
        this.topo = 0; 
        this.tam = tam; 
    }
    push(elemento){
        if(this.isFull()){
            throw new Error("StackOverFlow");
        }
        this.dados[this.topo] = elemento;
        this.topo++; 
    }
    pop(){
        if (this.isEmpty()){
            throw new Error("StackUnderFlow")
        }
        this.topo--;
        return this.dados[this.topo];
    }
    isEmpty(){
        return this.length() === 0;
    }
    isFull(){
        return this.length() === this.tam;
    }
    top(){
        if(!this.isEmpty()){
            return this.dados[this.topo -1];
        }
    }
    clear(){
        this.topo = 0;
    }
    length(){
        return this.topo;
    }
    toString() {
        let texto = "";
        for (let i = 0; i < this.topo; i++) {
            texto += this.dados[i] + " ";
        }
        return texto.trim();
    }

}
module.exports = Pilha;
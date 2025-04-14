class Deque  {
    constructor(tam = 10){
        this.dados = [];
        this.tam = tam;
        this.inicio = -1;
        this.fim = 0;
    }
    
    inserirInicio(dado){
        if (this.isFull()) {
            throw new Error("Deque cheio!");
        }
    
        if (this.isEmpty()) {
            this.inicio = 0;
            this.fim = 0;
        } else {
            this.inicio = (this.inicio - 1 + this.tam) % this.tam;
        }
    
        this.dados[this.inicio] = dado;
    }
    
    inserirFim(dado){
        if (this.isFull()) {
            throw new Error("Deque cheio");
        }
    
        if (this.isEmpty()) {
            this.inicio = 0;
            this.fim = 0;
        } else {
            this.fim = (this.fim + 1) % this.tam;
        }
    
        this.dados[this.fim] = dado;
    }
    
    removerInicio(){
        if(this.isEmpty()){
            throw new Error("Deque vazio");
        } 

        let result = this.dados[this.inicio];

        if(this.inicio === this.fim){
            this.inicio = -1;
            this.fim = 0; 
        } else {
            if(this.inicio === this.tam - 1){
                this.inicio = 0;
            } else {
                this.inicio++;
            }
        }
        return result;
    }
    removerFim(){
        if(this.isEmpty()){
            throw new Error("Deque vazio");
        } 
        let result = this.dados[this.fim];
        if(this.fim === this.inicio){
            this.inicio = -1;
            this.fim = 0;
        } else {
            if(this.fim === 0){
                this.fim = this.tam - 1;
            } else {
                this.fim--;
            }
        }
        return result;
    }
    length(){
        if(this.isEmpty()){
            return 0;
        } else {
            if(this.inicio <= this.fim){
                return this.fim - this.inicio + 1;
            } else {
                return this.tam - this.inicio + this.fim + 1;
            }
        }
    }
    

    isEmpty(){
        return this.inicio === -1;
    }
    isFull(){
        return (this.inicio === 0 && this.fim  === this.tam - 1) || this.inicio === this.fim + 1;
    }
    toString() {
        if (this.isEmpty()) return "[]";
        let i = this.inicio;
        let result = [];
        while (true) {
            result.push(this.dados[i]);
            if (i === this.fim) break;
            i = (i + 1) % this.tam;
        }
        return `[${result.join(", ")}]`;
    }
    
}
module.exports = { Deque }; 
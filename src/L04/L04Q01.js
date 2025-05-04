
class Node{
    constructor(data, priority){
        this.data = data;
        this.priority = priority;
    }
}
class HeapMinimo{
    constructor(){
        this.tree = [];
        this.tree[0] = new Node(0, -999999999);
        this.size = 0;
    }
    insert(data, priority){
        let novoNo = new Node(data, priority);
        this.tree[++this.size] = novoNo;
        let indicePai = parseInt(this.size/2);
        let indiceFilho = this.size;
        while(this.tree[indiceFilho].priority < this.tree[indicePai].priority){
            let aux = this.tree[indicePai];
            this.tree[indicePai] = this.tree[indiceFilho];
            this.tree[indiceFilho] = aux;
            indiceFilho = indicePai;
            indicePai = parseInt(indiceFilho/2); 
        }
    }
    toArray(){
        let saida = [];
        for(let i = 1; i <= this.size; i++){
            saida.push(this.tree[i]);
        }
        return saida;
    }
    remove(){
        this.tree[1] = this.tree[this.size];
        this.size--;
        let indicePai = 1;
        let aux;
        let filhoVezIndice;
        filhoVezIndice = this.filho_indice_fun(indicePai);
        while(this.tree[indicePai].priority > this.tree[filhoVezIndice].priority){
            aux = this.tree[filhoVezIndice];
            this.tree[filhoVezIndice] = this.tree[indicePai];
            this.tree[indicePai] = aux;
            indicePai = filhoVezIndice;
            filhoVezIndice = this.filho_indice_fun(indicePai);
        }

    }
    filho_indice_fun(indicePai) {
        let filhoEsq = indicePai * 2;
        let filhoDir = indicePai * 2 + 1;

        if (filhoEsq > this.size) {
            return indicePai;
        }

        if (filhoDir > this.size) {
            return filhoEsq;
        }

        if (this.tree[filhoDir].priority < this.tree[filhoEsq].priority) {
            return filhoDir;
        }

        return filhoEsq;
    }
}
module.exports = {HeapMinimo};
const { No } = require("./No")

class ListaSimplesmenteLigada{
    constructor(){
        this.head = new No();
    }

    add(dado){
        let novo_no = new No(dado);

        novo_no.proximo = this.head.proximo;
        this.head.proximo = novo_no;

    }
    append(dado){
        let novo_no = new No(dado);
        if(this.isEmpty()){
            this.head.proximo = novo_no;
        }else{
            let node_a = this.head;
            let node_b = this.head.proximo;

            while(node_b.proximo !== null){
                node_a = node_b;
                node_b = node_b.proximo;
            }
            node_b.proximo = novo_no; 
        }
    }
    addAt(dado, posicao){
        let novo_no = new No(dado);
        if(posicao <= this.length() && posicao >=1){
            let node_a = this.head;
            let node_b = this.head.proximo;

            for (let i = 1; i !== posicao; i++){
                node_a = node_b;
                node_b = node_b.proximo;
            }
            node_a.proximo = novo_no;
            novo_no.proximo = node_b;
        }


    }
    removeFirst(){
        if(!this.isEmpty()){
            let aux = this.head.proximo;
            this.head.proximo = aux.proximo; 
        }

    }
    removeLast(){
        if(!this.isEmpty()){
            let node_a = this.head;
            let node_b = this.head.proximo;

            while(node_b.proximo !== null){
                node_a = node_b;
                node_b = node_b.proximo;
            }
            node_a.proximo = null; 
        }

    }
    removeAt(posicao){
        if(!this.isEmpty()){
            if(posicao <= this.length() && posicao >= 1 ){
                let node_a = this.head;
                let node_b = this.head.proximo;

                for(let i = 1; i !== posicao; i++){
                    node_a = node_b;
                    node_b = node_b.proximo;
                }
                node_a.proximo = node_b.proximo; 
            }

        }else {
            throw new Error("Empty List");
        }

    }
    isEmpty(){
        return this.head.proximo === null;

    }
    search(dado){
        if(!this.isEmpty()){
            let node_a = this.head;
            while(node_a.proximo !== null){
                if(dado === node_a.dado){
                    return true;
                }
                node_a = node_a.proximo;
            }
        } else {
            throw new Error("Empty List");
        }
        return false;

    }
    length(){
        let result = 0;
        let node_b = this.head.proximo;
        while (node_b !== null) {
            result++;
            node_b = node_b.proximo;
        }
        return result;

    }
}
module.exports = { ListaSimplesmenteLigada }
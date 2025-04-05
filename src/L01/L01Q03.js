const Pilha = require("./Pilha");

function trocaTopoBase(p){
    let aux = new Pilha(p.tam);
    let final = new Pilha(p.tam);

    if(p.length() <= 1){
        return Pilha;
    } else {
        final.push(p.pop());
        while(p.length() > 1){
            aux.push(p.pop());
        }
        while(aux.length() > 0){
            final.push(aux.pop());
        }
        final.push(p.pop());
    }
    return final; 
}

module.exports = trocaTopoBase;
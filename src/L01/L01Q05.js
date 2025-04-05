const Pilha = require("./Pilha");

function verificacao(texto){
    let p = new Pilha(texto.length);
    let aux;
    for(let i = 0; i < texto.length; i++){
        if(texto[i] === '(' || texto[i] === '['){
            p.push(texto[i]);
        } else {
            aux = p.pop();
            if((aux === '(' && texto[i] !== ')') || aux === '[' && texto[i] !== ']'){
                return false;
            }
        }
    }
    return p.isEmpty();
}

module.exports = { verificacao };
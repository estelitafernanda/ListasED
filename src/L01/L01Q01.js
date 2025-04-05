const Pilha = require("./Pilha");

function invertePilha(texto){
    let p = new Pilha(texto.length);
    let result = "";

    for(let i = 0; i < texto.length; i++){
        p.push(texto[i]);
    }

    while(!p.isEmpty()){
        result += p.pop(); 
    }

    return result; 

}
module.exports = { invertePilha };

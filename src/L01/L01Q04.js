const Pilha = require("./Pilha");


function conversor(numero){
    let pilha = new Pilha();
    let resto;
    let resultado = "";
    while(numero > 0){
        resto = Math.floor(numero % 2);
        pilha.push(resto);
        numero = Math.floor(numero/2);
    }
    while(!pilha.isEmpty()){
        resultado += pilha.pop().toString();
    }
    return resultado;
    
}
module.exports = { conversor };
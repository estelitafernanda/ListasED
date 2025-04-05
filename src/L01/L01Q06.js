const Pilha = require("./Pilha");

function conveRPN(expressao) {
    const precedente = {
        '^': 3,
        '*': 2, '/': 2,
        '+': 1, '-': 1
    };

    const associacao = {
        '^': 'right',
        '*': 'left', '/': 'left',
        '+': 'left', '-': 'left'
    };

    let operadores = new Pilha(expressao.length);
    let saida = [];

    for (let i = 0; i < expressao.length; i++) {
        let simbolo = expressao[i];

        if (/[a-z]/.test(simbolo)) {
            saida.push(simbolo);
        } else if (simbolo in precedente) {
            while (!operadores.isEmpty() &&
                operadores.top() !== '(' &&
                (precedente[operadores.top()] > precedente[simbolo] ||
                    (precedente[operadores.top()] === precedente[simbolo] && associacao[simbolo] === 'left'))) {
                saida.push(operadores.pop());
            }
            operadores.push(simbolo);
        } else if (simbolo === '(') {
            operadores.push(simbolo);
        } else if (simbolo === ')') {
            while (!operadores.isEmpty() && operadores.top() !== '(') {
                saida.push(operadores.pop());
            }
            operadores.pop(); 
        }
    }

    
    while (!operadores.isEmpty()) {
        saida.push(operadores.pop());
    }

    return saida.join('');
}

module.exports = { conveRPN };

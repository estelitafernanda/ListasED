const { conveRPN } = require("../../src/L01/L01Q06");

describe("Conversão de expressões infixas para RPN", () => {
    const casosDeTeste = [
        { expressao: "(a+(b*c))", esperado: "abc*+" },
        { expressao: "((a+b)*(z+x))", esperado: "ab+zx+*" },
        { expressao: "((a+t)*((b+(a+c))^(c+d)))", esperado: "at+bac++cd+^*" },
        { expressao: "a+b*c-d", esperado: "abc*+d-" },
        { expressao: "(a+b)+c/d", esperado: "ab+cd/+" },
        { expressao: "a*b-(c-d)+e", esperado: "ab*cd--e+" }
    ];

    test.each(casosDeTeste)("Convertendo: $expressao -> $esperado", ({ expressao, esperado }) => {
        expect(conveRPN(expressao)).toBe(esperado);
    });
});

/*Q1 - Uma estrutura de dados do tipo pilha pode ser usada
em um algoritmo que permite imprimir uma palavra de forma invertida. Por exemplo, ABACAXI
deve ser impresso IXACABA. Utilizando uma pilha e suas operações base, desenvolva a função
inverte que recebe uma String e, utilizando as funções push e pop da pilha, retorne a palavra de
forma invertida.*/

const { invertePilha } = require("../../src/L01/L01Q01");



test("inversão de pilha", () => {
    expect(invertePilha ("ABACAXI")).toBe("IXACABA"); 
});


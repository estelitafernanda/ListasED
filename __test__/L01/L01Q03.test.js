/* Q3 - Implemente uma função que troca de lugar o elemento que está no topo da pilha
com o elemento que está na base da pilha. Usar apenas uma pilha como auxiliar. */

const trocaTopoBase = require("../../src/L01/L01Q03");
const Pilha = require("../../src/L01/Pilha");



let p;

beforeEach(() => {
    p = new Pilha(5);
});

test("trocando o topo pela base", () => {
    p.push(1);
    p.push(2);
    p.push(3);
    p.push(4);
    p.push(5);

    expect(p.toString()).toBe("1 2 3 4 5");
    expect(trocaTopoBase(p).toString()).toBe("5 2 3 4 1");
});
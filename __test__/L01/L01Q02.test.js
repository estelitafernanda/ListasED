/* Q2 - Uma Pilha pode ser definida como um conjunto ordenado de dados, no qual os
dados podem ser inseridos ou removidos a partir de uma extremidade chamada topo da pilha.
Duas pilhas A e B podem ser implementas a partir do compartilhamento do mesmo vetor de
tamanho determinado, como apresentado na figura a seguir. Escreva as seguintes funções em
Javascript.
i. Declarações de constantes e procedimento de inicializar as pilhas (os valores de
topoA e topoB).
ii. As funções ÉVaziaA e ÉVaziaB.
iii. As funções empilhaA, empilhaB, desempilhaA e desempilhaB. Só deve ser
emitida uma mensagem de pilha cheia se todas as posições do vetor estiverem ocupadas.
*/

const PilhaQ2 = require("../../src/L01/PilhaQ02");



    let p; 

beforeEach(() => {
    p = new PilhaQ2(5);
});

test("Pilha A e B", () => {
    expect(p.isEmptyA()).toBe(true);
    expect(p.isEmptyB()).toBe(true);
    p.pushA(1);
    p.pushB(2)
    expect(p.isEmptyA()).toBe(false);
    expect(p.isEmptyB()).toBe(false);
    p.popA();
    p.pushB(6);
    expect(p.isEmptyA()).toBe(true);
    expect(p.isEmptyB()).toBe(false);
    p.popB();
    p.popB();
    p.pushA(3);
    expect(p.isEmptyA()).toBe(false);
    expect(p.isEmptyB()).toBe(true);
});
test("Enchendo as pilhas", () => {
    p.pushA(1);
    p.pushA(2);
    p.pushA(3);
    p.pushB(4);
    p.pushB(5);
    expect(p.isEmptyA()).toBe(false);
    expect(p.isEmptyB()).toBe(false);
    expect(p.isFull()).toBe(true);
})
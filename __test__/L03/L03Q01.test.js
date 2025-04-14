const { PilhaLista } = require("../../src/L03/L03Q01")

let pilha;

beforeEach(() => {
    pilha = new PilhaLista();
})

test("Pilha inicializada", () => {
    expect(pilha.isEmpty()).toBe(true);
    expect(pilha.length()).toBe(0);
});

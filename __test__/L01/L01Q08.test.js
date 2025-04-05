const { PilhaDePratos } = require("../../src/L01/L01Q08");

let pratos;
beforeEach(() => {
    pratos = new PilhaDePratos(5);
})


test("empilhando pratos", () => {
    pratos.empilha(1);
    pratos.empilha(2);
    pratos.empilha(3);
    pratos.empilha(4);
    pratos.empilha(5);
    pratos.empilha(6);
    expect(pratos.pilhas.length).toBe(2);
})
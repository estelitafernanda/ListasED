const { Empresa } = require("../../src/L02/L02Q03");

let et;
beforeEach(() => {
    et = new Empresa(10);
})

test("verificar (cheio, vazio)", () => {
    expect(et.aguardo()).toBe(true);
    expect(et.carregamentoAtingido()).toBe(false);
})
test("inserindo caminhões", () => {
    et.chegada("a");
    expect(et.aguardo()).toBe(false);
});
test("inserindo e removendo", () => {
    et.chegada("C");
    et.chegada("B");
    expect(et.aguardo()).toBe(false);
    et.saida();
    et.saida();
    expect(et.carregamentoAtingido()).toBe(false);
    expect(et.aguardo()).toBe(true);
});
test("Fila cheia", () => {
    et.chegada("A");
    et.chegada("B");
    et.chegada("C");
    et.chegada("D");
    et.chegada("E");
    et.chegada("F");
    et.chegada("G");
    et.chegada("H");
    et.chegada("I");
    et.chegada("J");
    expect(et.carregamentoAtingido()).toBe(true);
    et.saida();
    et.saida();
    et.saida();
    et.saida();
    et.saida();
    et.saida();
    et.saida();
    et.saida();
    et.saida();
    et.saida();
    expect(et.carregamentoAtingido()).toBe(false);
    expect(et.aguardo()).toBe(true);
})
test("Verificando carregamentos", () => {
    et.chegada("A");
    et.chegada("B");
    expect(et.toString()).toBe("[A,B,]");
})
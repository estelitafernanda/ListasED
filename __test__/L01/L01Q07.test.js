const { removerDuplicados } = require("../../src/L01/L01Q07")

let sequencia;
beforeEach(() => {
    sequencia = "37327142";
});

test("Removendo numeros duplicados", () => {
    expect(removerDuplicados(sequencia)).toEqual(["3", "7", "2", "1", "4"])
});
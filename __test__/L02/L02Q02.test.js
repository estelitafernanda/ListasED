const { FilaP } = require("../../src/L02/L02Q02");

let f;
beforeEach(() => {
    f = new FilaP(5);
});

test("Fila Instanciada", () => {
    expect(f.isEmpty()).toBe(true);
});


test("Enfileirando", () => {
    f.enqueue(1);
    f.enqueue(2);
    expect(f.dequeue()).toBe(1);
});



const { FilaLista } = require("../../src/L03/L03Q02");

let f;
beforeEach(() => {
    f = new FilaLista();
});

test("fila inicializada", () => {
    expect(f.isEmpty()).toBe(true);
    expect(f.length()).toBe(0);
})

test("adicionando na fila", () => {
    f.enqueue(20);
    f.enqueue(10);
    f.enqueue(30);
    expect(f.front()).toBe(20);
    f.dequeue();
    expect(f.front()).toBe(10);
    f.dequeue();
    expect(f.front()).toBe(30);
})


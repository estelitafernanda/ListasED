const { Pilha2F } = require("../../src/L02/L02Q01");

let f;
beforeEach(() => {
    f = new Pilha2F(5);
})

test("Pilha cheia", () => {
    f.push(1);
    f.push(2);
    f.push(3);
    f.push(4);
    f.push(5);
    expect(f.isEmpty()).toBe(false);
    expect(f.isFull()).toBe(true);
});

test("Pilha front", () => {
    f.push(2);
    f.push(3);
    f.push(4);
    expect(f.peek()).toBe(4);
});

test("Pilha inicializada", () => {
    expect(f.isEmpty()).toBe(true);
})

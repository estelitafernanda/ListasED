const { Fila } = require("../../src/L02/Fila");
const { intercalarFilas, FilaInter } = require("../../src/L02/L02Q04");

let f1, f2;

beforeEach(() => {
    f1 = new FilaInter();
    f2 = new FilaInter();
});

test("Intercala duas filas com 2 elementos cada", () => {
    f1.enqueue(1);
    f1.enqueue(3);
    f2.enqueue(2);
    f2.enqueue(4);

    const inter = intercalarFilas(f1, f2);

    expect(inter.toString()).toBe("[1,2,3,4,]");
});

test("Intercala uma fila vazia com uma com elementos", () => {
    f2.enqueue(10);
    f2.enqueue(20);

    const inter = intercalarFilas(f1, f2);

    expect(inter.toString()).toBe("[10,20,]");
});

test("Intercala filas de tamanhos diferentes", () => {
    f1.enqueue(5);
    f2.enqueue(6);
    f2.enqueue(7);

    const inter = intercalarFilas(f1, f2);

    expect(inter.toString()).toBe("[5,6,7,]");
});

const { FilaInter } = require("../../src/L02/L02Q04");
const { reverterFila } = require("../../src/L02/L02Q06");

test("reverterFila deve inverter os elementos da fila", () => {
    const fila = new FilaInter();
    fila.enqueue(1);
    fila.enqueue(2);
    fila.enqueue(3);

    reverterFila(fila);

    expect(fila.toString()).toBe("[3,2,1,]");
});

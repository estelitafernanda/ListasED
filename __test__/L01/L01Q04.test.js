/*Implemente um conversor de números decimais para binários utilizando uma pilha.*/

const { conversor } = require("../../src/L01/L01Q04");



test("convertendo decimail para binário", () => {
    expect(conversor(10)).toBe("1010");
})


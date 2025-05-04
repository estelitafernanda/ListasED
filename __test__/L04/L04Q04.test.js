const { verificarVencedoresMegaSena } = require("../../src/L04/L04Q04");

describe("Mega Sena com HeapMinimo", () => {
    test("deve identificar sena e quina corretamente", () => {
        const sorteados = [5, 12, 23, 34, 45, 56];
        const apostas = [
            [5, 12, 23, 34, 45, 56],    
            [5, 12, 23, 34, 45],        
            [1, 2, 3, 4, 5, 6],          
            [12, 23, 34, 45, 56, 60],    
        ];

        const resultado = verificarVencedoresMegaSena(sorteados, apostas);

        expect(resultado).toEqual({
            sena: [0],
            quina: [1, 3]
        });
    });

    test("sem ganhadores", () => {
        const sorteados = [10, 20, 30, 40, 50, 60];
        const apostas = [
            [1, 2, 3, 4, 5, 6],
            [7, 8, 9, 11, 12, 13]
        ];

        const resultado = verificarVencedoresMegaSena(sorteados, apostas);

        expect(resultado).toEqual({
            sena: null,
            quina: null
        });
    });
});
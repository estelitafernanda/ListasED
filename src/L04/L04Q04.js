const { HeapMinimo } = require("./L04Q01");

function verificarVencedoresMegaSena(numerosSorteados, apostas) {
    const heap = new HeapMinimo();

    for (let i = 0; i < apostas.length; i++) {
        const aposta = apostas[i];
        const acertos = aposta.filter(num => numerosSorteados.includes(num)).length;
        heap.insert({ index: i, acertos }, -acertos);
    }

    const sena = [];
    const quina = [];

    const resultadoHeap = heap.toArray();
    for (const node of resultadoHeap) {
        const { index, acertos } = node.data;
        if (acertos === 6) sena.push(index);
        else if (acertos === 5) quina.push(index);
    }

    return {
        sena: sena.length > 0 ? sena : null,
        quina: quina.length > 0 ? quina : null,
    };
}

module.exports = { verificarVencedoresMegaSena };
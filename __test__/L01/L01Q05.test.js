/*É possível analisar se uma sequência parêntesis e colchetes está bem-formada,
ou seja, parênteses e colchetes são fechados na ordem inversa àquela em que foram abertos
utilizando uma pilha. Por exemplo, a sequência [ ( ) [ ( ) ] ] ( ) está bem-formada, enquanto ( ( )
] está malformada. Implemente um programa que recebe um texto e analisa se ele está bem
formado em termos de ordem de parêntesis e colchetes. */

const { verificacao } = require("../../src/L01/L01Q05");


describe("Verificando a função de sequência de parêntesis", () => {
    const textoTeste = [
        {texto: "(([)", esperado: false},
        {texto: "(([]))", esperado: true}
    ]
    test.each(textoTeste)("verificacao", ({texto, esperado}) => {
        expect(verificacao(texto)).toBe(esperado);
    })
})

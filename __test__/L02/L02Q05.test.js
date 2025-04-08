let d;

beforeEach(() => {
    d =  new Deque(5);
})
test("", () => {
    expect(d.length()).toBe(0);
})
test("Inserção e remoção do inicio", () =>{
    d.inserirInicio(10);
    d.inserirInicio(15);
    expect(d.removerInicio()).toBe(15);
});

test("", () => {
    d.inserirFim(10);
    d.inserirFim(15);
    expect(d.removerFim()).toBe(15);
})

test("", () => {
    
})

const { HeapMinimo } = require("../../src/L04/L04Q01");

let heap;
beforeEach(() => {
    heap = new HeapMinimo();
});

test("adicionando heaps e verificando se está certo", () => {
    heap.insert(2, 4);
    heap.insert(4, 2);
    expect(heap.toArray()).toEqual([{"data": 4, "priority": 2}, {"data": 2, "priority": 4}]);
    heap.insert(5, 1);
    heap.insert(7, 3);
    expect(heap.toArray()).toEqual([{"data": 5, "priority": 1}, {"data": 7, "priority": 3}, {"data": 4, "priority": 2}, {"data": 2, "priority": 4}]);
});
test("removendo heaps", () => {
    heap.insert(2, 4);
    heap.insert(4, 2);
    heap.remove();
    expect(heap.toArray()).toEqual([{"data": 2, "priority": 4}]);
    heap.insert(7, 5);
    heap.insert(4, 3);
    heap.insert(5, 1);
    heap.remove();
    expect(heap.toArray()).toEqual([{"data": 4, "priority": 3}, {"data": 7, "priority": 5}, {"data": 2, "priority": 4}]);
});
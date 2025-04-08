function reverterFila(fila) {
    if (fila.isEmpty()) {
        return;
    }
    const elemento = fila.dequeue(); 
    reverterFila(fila); 
    fila.enqueue(elemento);   
}
module.exports = { reverterFila };
    

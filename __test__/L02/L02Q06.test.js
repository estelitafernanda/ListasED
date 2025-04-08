const { FilaInter } = require("../../src/L02/L02Q04");
const { reverterFila } = require("../../src/L02/L02Q06");

const f = new FilaInter();
f.enqueue(1);
f.enqueue(2);
f.enqueue(3);
f.enqueue(4);

console.log("Antes:", f.toString());

reverterFila(f);

console.log("Depois:", f.toString()); 

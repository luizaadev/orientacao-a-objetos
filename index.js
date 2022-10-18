import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Luiza", 11122233309);
const cliente2 = new Cliente("Alice", 88822233309);


const contaCorrenteLuiza = new ContaCorrente(1001, cliente1);
contaCorrenteLuiza.depositar(500);
contaCorrenteLuiza.sacar(100);

const conta2 = new ContaCorrente(102, cliente2);

let valor = 200;
contaCorrenteLuiza.tranferir(valor, conta2);

console.log(contaCorrenteLuiza);
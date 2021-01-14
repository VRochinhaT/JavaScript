import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

/*const cliente1Nome = 'Ricardo';
const cliente1CPF = 11122233309;
const cliente1Agencia = 1001;
const cliente1Saldo = 0;

const cliente2Nome = 'Alice';
const cliente2CPF = 44455566609;
const cliente2Agencia = 1001;
const cliente2Saldo = 0;

console.log(cliente1Nome);*/

//cliente1.nome = 'Ricardo';
//cliente1.cpf = 11122233309;

const cliente1 = new Cliente('Ricardo', 11122233309);

//cliente2.nome = 'Alice';
//cliente2.cpf = 44455566609;

const contaCorrenteRicardo = new ContaCorrente(cliente1 , 1001);

//contaCorrenteRicardo.agencia = 1001;
//contaCorrenteRicardo.cliente = cliente1;

contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(50);

console.log(contaCorrenteRicardo);

const conta2 = new ContaCorrente();

conta2.agencia = 1001;
conta2.cliente = new Cliente('Alice',44455566609);
//conta2.cliente.nome = 'Alice';
//conta2.cliente.cpf = 44455566609;

contaCorrenteRicardo.transferir(200, conta2);

console.log(conta2);

console.log(ContaCorrente.numeroDeContas);

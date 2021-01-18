import {Gerente} from "./Funcionario/Gerente.js"
import {Diretor} from "./Funcionario/Diretor.js"
import {Cliente} from "./Cliente.js"
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo", 10000, 11122233309);
diretor.cadastrarSenha("123456")

const gerente =  new Gerente("Ricardo", 5000, 88822233309);
gerente.cadastrarSenha("123");

const diretorLogado = SistemaAutenticacao.login(diretor, "123456");
const gerenteLogado = SistemaAutenticacao.login(gerente, "123");

console.log(diretorLogado, gerenteLogado);

const cliente = new Cliente("Vitor", 12345678909, "0000");

const clienteLogado = SistemaAutenticacao.login(cliente, "456");

console.log(clienteLogado);




/*import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./Conta/ContaCorrente.js"
import {ContaPoupanca} from "./Conta/ContaPoupanca.js"

const cliente1 = new Cliente("Ricardo", 11122233309);
const cliente2 = new Cliente("Alice", 88822233309);


const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);
contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(100);

const contaPoupanca = new ContaPoupanca(50, cliente2, 1001);
console.log(contaPoupanca.sacar(10));

//const conta =  new Conta(0,0,0);
//console.log(contaCorrenteRicardo);
//console.log(contaPoupanca);*/
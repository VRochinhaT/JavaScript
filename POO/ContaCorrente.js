import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    static numeroDeContas = 0;

    agencia;
    _saldo = 0;
    _cliente;

    set cliente (c) {
      if(c instanceof Cliente)
        this._cliente = c;
    }

    get cliente () {
      return this._cliente;
    }

    get saldo(){
      return this._saldo;
    }

    constructor(cliente, agencia) {
      this.cliente = cliente;
      this.agencia = agencia;

      ContaCorrente.numeroDeContas ++;
    }

    sacar(valor) {
      if(this._saldo >= valor){
        this._saldo -= valor;
        return valor;
        }
    }
  
    depositar(valor) {
      if(valor <= 0)
        return;
  
       this._saldo += valor;
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);

        conta.depositar(valorSacado);
    }
  }
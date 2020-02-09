"use strict"
class Configuracao {
    constructor() {
        
    }
    set pkConfiguracao(pkConfiguracao) {
        this._pkConfiguracao = pkConfiguracao;
    }
    get pkConfiguracao() {
        return this._pkConfiguracao;
    }
    set maximoRenovacoes(maximoRenovacoes) {
        this._maximoRenovacoes = maximoRenovacoes;
    }
    get maximoRenovacoes() {
        return this._maximoRenovacoes;
    }
    set valorDebito(valorDebito) {
        this._valorDebito = valorDebito;
    }
    get valorDebito() {
        return this._valorDebito;
    }
    set diasRenovacao(diasRenovacao) {
        this._diasRenovacao = diasRenovacao;
    }
    get diasRenovacao() {
        return this._diasRenovacao;
    }
    set diasEmprestimo(diasEmprestimo) {
        this._diasEmprestimo = diasEmprestimo;
    }
    get diasEmprestimo() {
        return this._diasEmprestimo;
    }

}
module.exports = Configuracao
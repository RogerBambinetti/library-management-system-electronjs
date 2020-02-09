"use strict"
class Emprestimo {
    constructor() {

    }
    set pkEmprestimo(pkEmprestimo) {
        this._pkEmprestimo = pkEmprestimo;
    }
    get pkEmprestimo() {
        return this._pkEmprestimo;
    }
    set emprestimo(emprestimo) {
        this._emprestimo = emprestimo;
    }
    get emprestimo() {
        return this._emprestimo;
    }
    set devolucao(devolucao) {
        this._devolucao = devolucao;
    }
    get devolucao() {
        return this._devolucao;
    }
    set situacao(situacao) {
        this._situacao = situacao;
    }
    get situacao() {
        return this._situacao;
    }
    set debito(debito) {
        this._debito = debito;
    }
    get debito() {
        return this._debito;
    }
    set renovacoes(renovacoes) {
        this._renovacoes = renovacoes;
    }
    get renovacoes() {
        return this._renovacoes;
    }
    set fkUsuario(fkUsuario) {
        this._fkUsuario = fkUsuario;
    }
    get fkUsuario() {
        return this._fkUsuario;
    }
    set fkExemplar(fkExemplar) {
        this._fkExemplar = fkExemplar;
    }
    get fkExemplar() {
        return this._fkExemplar;
    }

}
module.exports = Emprestimo
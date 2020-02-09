"use strict"
var Emprestimo = require('../model/Emprestimo');
var DaoEmprestimo = require('../model/DaoEmprestimo');
class ControlEmprestimo {
    constructor() {
        this.dao = new DaoEmprestimo();
        this.emprestimo = new Emprestimo();
    }

    inserir(emprestimo, devolucao, situacao, fkUsuario, fkExemplar) {
        this.emprestimo.emprestimo = emprestimo;
        this.emprestimo.devolucao = devolucao;
        this.emprestimo.situacao = situacao;
        this.emprestimo.fkUsuario = fkUsuario;
        this.emprestimo.fkExemplar = fkExemplar;
        if (this.dao.inserir(this.emprestimo)) {
            console.log("Sucesso");
        } else {
            console.log("Erro");
        }
    }

    editar(pkEmprestimo, emprestimo, devolucao, situacao, fkUsuario, fkExemplar) {
        this.emprestimo.pkEmprestimo = pkEmprestimo;
        this.emprestimo.emprestimo = emprestimo;
        this.emprestimo.devolucao = devolucao;
        this.emprestimo.situacao = situacao;
        this.emprestimo.fkUsuario = fkUsuario;
        this.emprestimo.fkExemplar = fkExemplar;
        if (this.dao.editar(this.emprestimo)) {
            console.log("Sucesso");
        } else {
            console.log("Erro");
        }
    }

    excluir(pkEmprestimo) {
        if (this.dao.excluir(pkEmprestimo)) {
            console.log("Sucesso");
        } else {
            console.log("Erro");
        }
    }

    selecionar(pkEmprestimo) {
        return this.dao.selecionar(pkEmprestimo);
    }

    selecionarPorExemplar(fkExemplar) {
        return this.dao.selecionarPorExemplar(fkExemplar);
    }

    listar() {
        return this.dao.listar();
    }

    devolver(exemplar, debito) {
        var erros = 0;
        if (exemplar.length == 0) {
            erros++;
        }
        if (erros == 0) {
            if (this.dao.devolver(exemplar, debito)) {
                console.log("Sucesso");
            } else {
                console.log("Erro");
            }
            return true;
        } else {
            return false;
        }
    }

    emprestar(fkExemplar, fkUsuario, diasEmprestimo) {
        var erros = 0;
        if (fkExemplar.length == 0) {
            erros++;
        }
        if (erros == 0) {
            if (this.dao.emprestar(fkExemplar, fkUsuario, diasEmprestimo)) {
                console.log("Sucesso");
            } else {
                console.log("Erro");
            }
            return true;
        } else {
            return false;
        }
    }

    contar(fkExemplar) {
        return this.dao.contar(fkExemplar);
    }

    filtrar(filtro) {
        return this.dao.filtrar(filtro);
    }

    renovar(fkExemplar, diasRenovacao) {
        return this.dao.renovar(fkExemplar, diasRenovacao);
    }

    verificaRenovacoes(fkExemplar, maximoRenovacoes) {
        return this.dao.verificaRenovacoes(fkExemplar, maximoRenovacoes);
    }

    listarDebito(fkUsuario) {
        return this.dao.listarDebito(fkUsuario);
    }

    quitarDebito(pkEmprestimo) {
        return this.dao.quitarDebito(pkEmprestimo);
    }

}
module.exports = ControlEmprestimo
"use strict"
var Configuracao = require('../model/Configuracao');
var DaoConfiguracao = require('../model/DaoConfiguracao');
class ControlConfiguracao {
    constructor() {
        this.dao = new DaoConfiguracao();
        this.configuracao = new Configuracao();
    }

    editar(maximoRenovacoes, valorDebito, diasRenovacao, diasEmprestimo) {
        var erros = 0;
        if (maximoRenovacoes < 0) {
            maximoRenovacoes = 0;
        }
        if (valorDebito < 0) {
            valorDebito = 0;
        }
        if (diasRenovacao < 0) {
            diasRenovacao = 0;
        }
        if (diasEmprestimo < 0) {
            diasEmprestimo = 0;
        }
        if (erros == 0) {
            this.configuracao.maximoRenovacoes = maximoRenovacoes;
            this.configuracao.valorDebito = valorDebito;
            this.configuracao.diasRenovacao = diasRenovacao;
            this.configuracao.diasEmprestimo = diasEmprestimo;
            if (this.dao.editar(this.configuracao)) {
                console.log("Sucesso");
            } else {
                console.log("Erro");
            }
            return true;
        } else {
            return false;
        }
    }

    selecionar() {
        return this.dao.selecionar();
    }

}
module.exports = ControlConfiguracao
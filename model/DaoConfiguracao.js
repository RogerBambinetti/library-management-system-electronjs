const sqlite3 = require('sqlite-sync');
"use strict"
class DaoConfiguracao {
    constructor() {
        try {
            this.conexao = sqlite3.connect('database.db');
        } catch (err) {
            console.error(err.message);
        }
    }

    editar(configuracao) {
        try {
            this.conexao.run("update configuracao set maximoRenovacoes = " + configuracao.maximoRenovacoes + ", valorDebito = " + configuracao.valorDebito + ", diasRenovacao = " + configuracao.diasRenovacao + ", diasEmprestimo = " + configuracao.diasEmprestimo + " where pkConfiguracao = 1");
            return true;
        } catch (err) {
            console.error(err.message);
            return false;
        }
    }

    selecionar() {
        try {
            return this.conexao.run("select * from configuracao where pkConfiguracao = 1");
        } catch (err) {
            console.error(err.message);
            return false;
        }
    }
}

module.exports = DaoConfiguracao
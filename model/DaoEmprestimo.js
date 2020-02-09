const sqlite3 = require('sqlite-sync');
"use strict"
class DaoEmprestimo {
    constructor() {
        try {
            this.conexao = sqlite3.connect('database.db');
        } catch (err) {
            console.error(err.message);
        }
    }

    inserir(emprestimo) {
        try {
            this.conexao.run("insert into emprestimo (situacao, devolucao, emprestimo, debito, renovacoes, fkUsuario, fkExemplar) values (" + emprestimo.situacao + ", " + emprestimo.devolucao + ", " + emprestimo.emprestimo + ", 0.0, 0, " + emprestimo.fkUsuario + ", " + emprestimo.fkExemplar + ")");
            return true;
        } catch (err) {
            console.error(err.message);
            return false;
        }
    }

    editar(emprestimo) {
        try {
            this.conexao.run("update emprestimo set situacao = '" + emprestimo.situacao + "', devolucao = '" + emprestimo.devolucao + "', emprestimo = '" + emprestimo.emprestimo + "', fkUsuario = " + emprestimo.fkUsuario + ", fkExemplar=" + emprestimo.fkExemplar + " where pkEmprestimo = " + emprestimo.pkEmprestimo);
            return true;
        } catch (err) {
            console.error(err.message);
            return false;
        }
    }

    excluir(pkEmprestimo) {
        try {
            this.conexao.run("delete from emprestimo where pkEmprestimo = " + pkEmprestimo);
            return true;
        } catch (err) {
            console.error(err.message);
            return false;
        }
    }

    selecionar(pkEmprestimo) {
        try {
            return this.conexao.run("select * from emprestimo where pkEmprestimo = " + pkEmprestimo);
        } catch (err) {
            console.error(err.message);
            return false;
        }
    }

    selecionarPorExemplar(fkExemplar) {
        try {
            return this.conexao.run("select * from emprestimo where situacao = 1 and fkExemplar = " + fkExemplar)[0];
        } catch (err) {
            console.error(err.message);
            return false;
        }
    }

    listar() {
        try {
            return this.conexao.run("select * from emprestimo");
        } catch (err) {
            console.error(err.message);
            return false;
        }
    }

    devolver(exemplar, debito) {
        try {
            this.conexao.run("update emprestimo set situacao = 0, debito = " + debito + " where fkExemplar = " + exemplar);
            return true;
        } catch (err) {
            console.error(err.message);
            return false;
        }
    }

    emprestar(fkExemplar, fkUsuario, diasEmprestimo) {
        var emprestimo = new Date();
        var devolucao = new Date(emprestimo.getFullYear(), emprestimo.getMonth(), emprestimo.getDate() + diasEmprestimo);
        try {
            this.conexao.run("insert into emprestimo (situacao, devolucao, emprestimo, debito, renovacoes, fkUsuario, fkExemplar) values (1, '" + devolucao + "','" + emprestimo + "',0 ,0 ," + fkUsuario + "," + fkExemplar + ")");
            return true;
        } catch (err) {
            console.error(err.message);
            return false;
        }
    }

    contar(fkExemplar) {
        try {
            var cont = this.conexao.run("select * from emprestimo where fkExemplar = " + fkExemplar + " and situacao = 1");
            return cont.length;
        } catch (err) {
            console.error(err.message);
            return false;
        }
    }

    filtrar(filtro) {
        try {
            return this.conexao.run("select * from emprestimo where situacao = " + filtro);
        } catch (err) {
            console.error(err.message);
            return false;
        }
    }

    renovar(fkExemplar, diasRenovacao) {
        try {
            var emprestimo = this.conexao.run("select * from emprestimo where situacao = 1 and fkExemplar = " + fkExemplar)[0];
            var dataAntiga = new Date(emprestimo.devolucao);
            var dataNova = new Date(dataAntiga.getFullYear(), dataAntiga.getMonth(), dataAntiga.getDate() + diasRenovacao);
            this.conexao.run("update emprestimo set devolucao = '" + dataNova + "', renovacoes = renovacoes + 1 where fkExemplar = " + fkExemplar);
        } catch (err) {
            console.error(err.message);
            return false;
        }
    }

    verificaRenovacoes(fkExemplar, maximoRenovacoes) {
        try {
            var emprestimo = this.conexao.run("select * from emprestimo where fkExemplar = " + fkExemplar)[0];
            if (emprestimo.renovacoes < maximoRenovacoes) {
                return true;
            } else {
                return false;
            }
        } catch (err) {
            console.error(err.message);
            return false;
        }
    }

    listarDebito(fkUsuario) {
        try {
            return this.conexao.run("select * from emprestimo where fkUsuario = " + fkUsuario + " and debito !=0");
        } catch (err) {
            console.error(err.message);
            return false;
        }
    }

    quitarDebito(pkEmprestimo) {
        try {
            this.conexao.run("update emprestimo set debito = 0 where pkEmprestimo = " + pkEmprestimo);
            return true;
        } catch (err) {
            console.error(err.message);
            return false;
        }
    }
}

module.exports = DaoEmprestimo
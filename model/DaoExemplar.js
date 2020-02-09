const sqlite3 = require('sqlite-sync');
"use strict"
class DaoExemplar {
    constructor() {
        try {
            this.conexao = sqlite3.connect('database.db');
        } catch (err) {
            console.error(err.message);
        }
    }

    inserir(exemplar) {
        try {
            this.conexao.run("insert into exemplar (numero, fkObra) values (" + exemplar.numero + ", " + exemplar.fkObra + ")");
            return true;
        } catch (err) {
            console.error(err.message);
            return false;
        }
    }

    editar(exemplar) {
        try {
            this.conexao.run("update exemplar set numero = '" + exemplar.numero + "', fkObra = " + exemplar.fkObra + " where pkExemplar = " + exemplar.pkExemplar);
            return true;
        } catch (err) {
            console.error(err.message);
            return false;
        }
    }

    excluir(pkExemplar) {
        try {
            this.conexao.run("delete from exemplar where pkExemplar = " + pkExemplar);
            return true;
        } catch (err) {
            console.error(err.message);
            return false;
        }
    }

    selecionar(pkExemplar) {
        try {
            return this.conexao.run("select * from exemplar where pkExemplar = " + pkExemplar);
        } catch (err) {
            console.error(err.message);
            return false;
        }
    }

    selecionarFkObra(fkObra) {
        try {
            return this.conexao.run("select * from exemplar where fkObra = " + fkObra);
        } catch (err) {
            console.error(err.message);
            return false;
        }
    }

    listar() {
        try {
            return this.conexao.run("select * from exemplar");
        } catch (err) {
            console.error(err.message);
            return false;
        }
    }

    contar(fkObra) {
        try {
            var cont = this.conexao.run("select * from exemplar where fkObra = " + fkObra);
            return cont.length;
        } catch (err) {
            console.error(err.message);
            return false;
        }
    }

    listarUltimos(numero){
        try {
            return this.conexao.run("select * from exemplar order by pkExemplar desc limit " + numero);
        } catch (err) {
            console.error(err.message);
            return false;
        }
    }

}

module.exports = DaoExemplar
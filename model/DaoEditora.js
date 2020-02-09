const sqlite3 = require('sqlite-sync');
"use strict"
class DaoEditora {
    constructor() {
        try {
            this.conexao = sqlite3.connect('database.db');
        } catch (err) {
            console.error(err.message);
        }
    }

    inserir(editora) {
        try {
            this.conexao.run("insert into editora (nome) values ('" + editora.nome + "')");
            return true;
        } catch (err) {
            console.error(err.message);
            return false;
        }
    }

    editar(editora) {
        try {
            this.conexao.run("update editora set nome = '" + editora.nome + "' where pkEditora = " + editora.pkEditora);
            return true;
        } catch (err) {
            console.error(err.message);
            return false;
        }
    }

    excluir(pkEditora) {
        try {
            this.conexao.run("delete from editora where pkEditora = " + pkEditora);
            return true;
        } catch (err) {
            console.error(err.message);
            return false;
        }
    }

    selecionar(pkEditora) {
        try {
            return this.conexao.run("select * from editora where pkEditora = " + pkEditora);
        } catch (err) {
            console.error(err.message);
            return false;
        }
    }

    listar() {
        try {
            return this.conexao.run("select * from editora order by nome");
        } catch (err) {
            console.error(err.message);
            return false;
        }
    }

    verificar(nome) {
        try {
            return this.conexao.run("select * from editora where nome like '" + nome + "'");
        } catch (err) {
            console.error(err.message);
            return false;
        }
    }

    selecionarUltimopkEditora() {
        try {
            return this.conexao.run("select seq from sqlite_sequence where name like 'editora'")[0].seq;
        } catch (err) {
            console.error(err.message);
            return false;
        }
    }
    
}

module.exports = DaoEditora
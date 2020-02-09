const sqlite3 = require('sqlite-sync');
"use strict"
class DaoAutor {
    constructor() {
        try {
            this.conexao = sqlite3.connect('database.db');
        } catch (err) {
            console.error(err.message);
        }
    }

    inserir(autor) {
        try {
            this.conexao.run("insert into autor (nome) values ('" + autor.nome + "')");
            return true;
        } catch (err) {
            console.error(err.message);
            return false;
        }
    }

    editar(autor) {
        try {
            this.conexao.run("update autor set nome = '" + autor.nome + "' where pkAutor = " + autor.pkAutor);
            return true;
        } catch (err) {
            console.error(err.message);
            return false;
        }
    }

    excluir(pkAutor) {
        try {
            this.conexao.run("delete from autor where pkAutor = " + pkAutor);
            return true;
        } catch (err) {
            console.error(err.message);
            return false;
        }
    }

    selecionar(pkAutor) {
        try {
            return this.conexao.run("select * from autor where pkAutor = " + pkAutor);
        } catch (err) {
            console.error(err.message);
            return false;
        }
    }

    listar() {
        try {
            return this.conexao.run("select * from autor order by nome");
        } catch (err) {
            console.error(err.message);
            return false;
        }
    }

    verificar(nome) {
        try {
            return this.conexao.run("select * from autor where nome like '" + nome + "'");
        } catch (err) {
            console.error(err.message);
            return false;
        }
    }

    selecionarUltimopkAutor() {
        try {
            return this.conexao.run("select seq from sqlite_sequence where name like 'autor'")[0].seq;
        } catch (err) {
            console.error(err.message);
            return false;
        }
    }
}

module.exports = DaoAutor




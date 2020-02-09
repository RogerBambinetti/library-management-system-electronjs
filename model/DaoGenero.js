const sqlite3 = require('sqlite-sync');
"use strict"
class DaoGenero {
    constructor() {
        try {
            this.conexao = sqlite3.connect('database.db');
        } catch (err) {
            console.error(err.message);
        }
    }

    inserir(genero) {
        try {
            this.conexao.run("insert into genero (nome) values ('" + genero.nome + "')");
            return true;
        } catch (err) {
            console.error(err.message);
            return false;
        }
    }

    editar(genero) {
        try {
            this.conexao.run("update genero set nome = '" + genero.nome + "' where pkGenero = " + genero.pkGenero);
            return true;
        } catch (err) {
            console.error(err.message);
            return false;
        }
    }

    excluir(pkGenero) {
        try {
            this.conexao.run("delete from genero where pkGenero = " + pkGenero);
            return true;
        } catch (err) {
            console.error(err.message);
            return false;
        }
    }

    selecionar(pkGenero) {
        try {
            return this.conexao.run("select * from genero where pkGenero = " + pkGenero);
        } catch (err) {
            console.error(err.message);
            return false;
        }
    }

    listar() {
        try {
            return this.conexao.run("select * from genero order by nome");
        } catch (err) {
            console.error(err.message);
            return false;
        }
    }

    verificar(nome) {
        try {
            return this.conexao.run("select * from genero where nome like '" + nome + "'");
        } catch (err) {
            console.error(err.message);
            return false;
        }
    }

    selecionarUltimopkGenero() {
        try {
            return this.conexao.run("select seq from sqlite_sequence where name like 'genero'")[0].seq;
        } catch (err) {
            console.error(err.message);
            return false;
        }
    }
}

module.exports = DaoGenero
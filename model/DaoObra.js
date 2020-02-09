const sqlite3 = require('sqlite-sync');
"use strict"
class DaoObra {
    constructor() {
        try {
            this.conexao = sqlite3.connect('database.db');
        } catch (err) {
            console.error(err.message);
        }
    }

    inserir(obra) {
        try {
            this.conexao.run("insert into obra (titulo, classificacao, ano, fkGenero, fkEditora, fkAutor) values ('" + obra.titulo + "', " + obra.classificacao + ", " + obra.ano + ", " + obra.fkGenero + ", " + obra.fkEditora + ", " + obra.fkAutor + ")");
            return true;
        } catch (err) {
            console.error(err.message);
            return false;
        }
    }

    editar(obra) {
        try {
            this.conexao.run("update obra set titulo = '" + obra.titulo + "', classificacao = " + obra.classificacao + ", ano=" + obra.ano + ", fkGenero = " + obra.fkGenero + ", fkEditora = " + obra.fkEditora + ", fkAutor=" + obra.fkAutor + " where pkObra = " + obra.pkObra);
            return true;
        } catch (err) {
            return false;
        }
    }

    excluir(pkObra) {
        try {
            this.conexao.run("delete from obra where pkObra = " + pkObra);
            return true;
        } catch (err) {
            console.error(err.message);
            return false;
        }
    }

    selecionar(pkObra) {
        try {
            return this.conexao.run("select * from obra where pkObra = " + pkObra);
        } catch (err) {
            console.error(err.message);
            return false;
        }
    }

    listar() {
        try {
            return this.conexao.run("select * from obra order by titulo");
        } catch (err) {
            console.error(err.message);
            return false;
        }
    }

    consultar(termo) {
        try {
            return this.conexao.run("select * from obra where titulo like '%" + termo + "%'");
        } catch (err) {
            console.error(err.message);
            return false;
        }
    }

    selecionarUltimopkObra() {
        try {
            return this.conexao.run("select seq from sqlite_sequence where name like 'obra'")[0].seq;
        } catch (err) {
            console.error(err.message);
            return false;
        }
    }
}

module.exports = DaoObra

const sqlite3 = require('sqlite-sync');
"use strict"
class DaoUsuario {
    constructor() {
        try {
            this.conexao = sqlite3.connect('database.db');
        } catch (err) {
            console.error(err.message);
        }
    }

    inserir(usuario) {
        try {
            this.conexao.run("insert into usuario (nome, nascimento, tipo) values ('" + usuario.nome + "','" + usuario.nascimento + "', '" + usuario.tipo + "')");
            return true;
        } catch (err) {
            console.error(err.message);
            return false;
        }
    }

    editar(usuario) {
        try {
            this.conexao.run("update usuario set nome = '" + usuario.nome + "', nascimento = '" + usuario.nascimento + "', tipo = '" + usuario.tipo + "' where pkUsuario = " + usuario.pkUsuario);
            return true;
        } catch (err) {
            console.error(err.message);
            return false;
        }
    }

    excluir(pkUsuario) {
        try {
            this.conexao.run("delete from usuario where pkUsuario = " + pkUsuario);
            return true;
        } catch (err) {
            console.error(err.message);
            return false;
        }
    }

    selecionar(pkUsuario) {
        try {
            return this.conexao.run("select * from usuario where pkUsuario = " + pkUsuario);
        } catch (err) {
            console.error(err.message);
            return false;
        }
    }

    listar() {
        try {
            return this.conexao.run("select * from usuario order by nome");
        } catch (err) {
            console.error(err.message);
            return false;
        }
    }

    listarComDebito() {
        try {
            return this.conexao.run("select distinct usu.pkUsuario, usu.nome from usuario usu join emprestimo emp on emp.fkUsuario = usu.pkUsuario where emp.debito > 0 order by usu.nome");
        } catch (err) {
            console.error(err.message);
            return false;
        }
    }

    filtrar(filtro) {
        try {
            return this.conexao.run("select * from usuario where tipo = " + filtro);
        } catch (err) {
            console.error(err.message);
            return false;
        }
    }
}

module.exports = DaoUsuario


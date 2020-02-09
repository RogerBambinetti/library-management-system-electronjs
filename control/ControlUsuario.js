"use strict"
var Usuario = require('../model/Usuario');
var DaoUsuario = require('../model/DaoUsuario');
class ControlUsuario {
    constructor() {
        this.dao = new DaoUsuario();
        this.usuario = new Usuario();
    }

    inserir(nome, nascimento, tipo) {
        var erros = 0;
        if (nome.length == 0) {
            erros++;
        }
        if (nascimento == "Invalid Date") {
            erros++;
        }
        if (erros == 0) {
            this.usuario.nome = nome;
            this.usuario.nascimento = nascimento;
            this.usuario.tipo = tipo;
            if (this.dao.inserir(this.usuario)) {
                console.log("Sucesso");
            } else {
                console.log("Erro");
            }
            return true;
        } else {
            return false;
        }
    }

    editar(pkUsuario, nome, nascimento, tipo) {
        var erros = 0;
        if (nome.length == 0) {
            erros++;
        }
        if (nascimento == "Invalid Date") {
            erros++;
        }
        if (erros == 0) {
            this.usuario.pkUsuario = pkUsuario;
            this.usuario.nome = nome;
            var n = nascimento.split("-");
            this.usuario.nascimento = new Date(n[0], n[1] - 1, n[2]);
            this.usuario.tipo = tipo;
            if (this.dao.editar(this.usuario)) {
                console.log("Sucesso");
            } else {
                console.log("Erro");
            }
            return true;
        } else {
            return false;
        }
    }

    excluir(pkUsuario) {
        if (this.dao.excluir(pkUsuario)) {
            console.log("Sucesso");
        } else {
            console.log("Erro");
        }
    }

    selecionar(pkUsuario) {
        return this.dao.selecionar(pkUsuario);
    }

    listar() {
        return this.dao.listar();
    }

    listarComDebito() {
        return this.dao.listarComDebito();
    }

    filtrar(filtro) {
        return this.dao.filtrar(filtro);
    }

    calcularIdade(nascimento) {
        var data = new Date();
        var aniversario;
        var n = new Date(nascimento);
        if (n.getMonth - 1 < data.getMonth()) {
            aniversario = true;
        } else if (n.getMonth() - 1 > data.getMonth()) {
            aniversario = false;
        } else {
            if (n.getDate() <= data.getDate()) {
                aniversario = true;
            }
        }
        if (aniversario) {
            return data.getFullYear() - n.getFullYear();
        } else {
            return data.getFullYear() - n.getFullYear() - 1;
        }
    }

}
module.exports = ControlUsuario
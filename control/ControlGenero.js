"use strict"
var Genero = require('../model/Genero');
var DaoGenero = require('../model/DaoGenero');
class ControlGenero {
    constructor() {
        this.dao = new DaoGenero();
        this.genero = new Genero();
    }

    inserir(nome) {
        var erros = 0;
        if (nome.length == 0) {
            erros++;
        }
        if (erros == 0) {
            this.genero.nome = nome;
            if (this.dao.inserir(this.genero)) {
                console.log("Sucesso");
            } else {
                console.log("Erro");
            }
            return true;
        } else {
            return false;
        }
    }

    editar(pkGenero, nome) {
        var erros = 0;
        if (nome.length == 0) {
            erros++;
        }
        if (erros == 0) {
            this.genero.pkGenero = pkGenero;
            this.genero.nome = nome;
            if (this.dao.editar(this.genero)) {
                console.log("Sucesso");
            } else {
                console.log("Erro");
            }
            return true;
        } else {
            return false;
        }
    }

    excluir(pkGenero) {
        if (this.dao.excluir(pkGenero)) {
            console.log("Sucesso");
        } else {
            console.log("Erro");
        }
    }

    selecionar(pkGenero) {
        return this.dao.selecionar(pkGenero);
    }

    listar() {
        return this.dao.listar();
    }

    verificar(nome) {
        return this.dao.verificar(nome);
    }

    selecionarUltimopkGenero() {
        return this.dao.selecionarUltimopkGenero();
    }

}
module.exports = ControlGenero
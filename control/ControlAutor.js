"use strict"
var Autor = require('../model/Autor');
var DaoAutor = require('../model/DaoAutor');
class ControlAutor {
    constructor() {
        this.dao = new DaoAutor();
        this.autor = new Autor();
    }

    inserir(nome) {
        var erros = 0;
        if (nome.length == 0) {
            erros++;
        }
        if (erros == 0) {
            this.autor.nome = nome;
            if (this.dao.inserir(this.autor)) {
                console.log("Sucesso");
            } else {
                console.log("Erro");
            }
            return true;
        } else {
            return false;
        }
    }

    editar(pkAutor, nome) {
        var erros = 0;
        if (nome.length == 0) {
            erros++;
        }
        if (erros == 0) {
            this.autor.pkAutor = pkAutor;
            this.autor.nome = nome;
            if (this.dao.editar(this.autor)) {
                console.log("Sucesso");
            } else {
                console.log("Erro");
            }
            return true;
        }
        else {
            return false;
        }
    }

    excluir(pkAutor) {
        if (this.dao.excluir(pkAutor)) {
            console.log("Sucesso");
        } else {
            console.log("Erro");
        }
        return true;
    }

    selecionar(pkAutor) {
        return this.dao.selecionar(pkAutor);
    }

    listar() {
        return this.dao.listar();
    }

    verificar(nome) {
        return this.dao.verificar(nome);
    }

    selecionarUltimopkAutor() {
        return this.dao.selecionarUltimopkAutor();
    }

}
module.exports = ControlAutor
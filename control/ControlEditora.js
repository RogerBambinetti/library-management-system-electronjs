"use strict"
var Editora = require('../model/Editora');
var DaoEditora = require('../model/DaoEditora');
class ControlEditora {
    constructor() {
        this.dao = new DaoEditora();
        this.editora = new Editora();
    }

    inserir(nome) {
        var erros = 0;
        if (nome.length == 0) {
            erros++;
        }
        if (erros == 0) {
            this.editora.nome = nome;
            if (this.dao.inserir(this.editora)) {
                console.log("Sucesso");
            } else {
                console.log("Erro");
            }
            return true;
        } else {
            return false;
        }
    }

    editar(pkEditora, nome) {
        var erros = 0;
        if (nome.length == 0) {
            erros++;
        }
        if (erros == 0) {
            this.editora.pkEditora = pkEditora;
            this.editora.nome = nome;
            if (this.dao.editar(this.editora)) {
                console.log("Sucesso");
            } else {
                console.log("Erro");
            }
            return true;
        } else {
            return false;
        }
    }

    excluir(pkEditora) {
        if (this.dao.excluir(pkEditora)) {
            console.log("Sucesso");
        } else {
            console.log("Erro");
        }
    }

    selecionar(pkEditora) {
        return this.dao.selecionar(pkEditora);
    }

    listar() {
        return this.dao.listar();
    }

    verificar(nome) {
        return this.dao.verificar(nome);
    }

    selecionarUltimopkEditora() {
        return this.dao.selecionarUltimopkEditora();
    }

}
module.exports = ControlEditora
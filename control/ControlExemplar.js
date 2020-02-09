"use strict"
var Exemplar = require('../model/Exemplar');
var DaoExemplar = require('../model/DaoExemplar');
class ControlExemplar {
    constructor() {
        this.dao = new DaoExemplar();
        this.exemplar = new Exemplar();
    }

    inserir(numero, fkObra) {
        var erros = 0;
        if (fkObra.length == 0) {
            erros++;
        }
        if (erros == 0) {
            this.exemplar.numero = numero;
            this.exemplar.fkObra = fkObra;
            if (this.dao.inserir(this.exemplar)) {
                console.log("Sucesso");
            } else {
                console.log("Erro");
            }
            return true;
        } else {
            return false;
        }
    }

    editar(pkExemplar, numero, fkObra) {
        this.exemplar.pkExemplar = pkExemplar;
        this.exemplar.numero = numero;
        this.exemplar.fkObra = fkObra;
        if (this.dao.editar(this.exemplar)) {
            console.log("Sucesso");
        } else {
            console.log("Erro");
        }
    }

    excluir(pkExemplar) {
        if (this.dao.excluir(pkExemplar)) {
            console.log("Sucesso");
        } else {
            console.log("Erro");
        }
    }

    selecionar(pkExemplar) {
        return this.dao.selecionar(pkExemplar);
    }

    selecionarFkObra(fkObra) {
        return this.dao.selecionarFkObra(fkObra);
    }

    listar() {
        return this.dao.listar();
    }

    contar(fkObra) {
        return this.dao.contar(fkObra);
    }

    listarUltimos(numero) {
        return this.dao.listarUltimos(numero);
    }

}
module.exports = ControlExemplar